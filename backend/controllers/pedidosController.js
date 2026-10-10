
const con = require("../db")

const mostrarPedidos = async (req, res) => {
    const [pedidos] = await con.query("SELECT * FROM pedidos")

    res.json(pedidos)
}

const mostrarPedido = async (req, res) => {
    const { id } = req.params

    const [pedido] = await con.query("SELECT * FROM pedidos WHERE id = ?", [id])

    res.json(pedido[0])
}

const terminarPedido = async (req, res) => {
    const { id } = req.params

    const [pedido] = await con.query("UPDATE pedidos SET estado = ? WHERE id = ?", ["listo", id])

    res.json(pedido[0])
}

const crearPedido = async (req, res) => {
    const id_usuario = req.usuario.id
    const conexion = await con.getConnection()

    try {
        await conexion.beginTransaction()

        //Obtener carrito
        const [items] = await conexion.query("SELECT * FROM carrito_items WHERE id_usuario = ?",[id_usuario])

        if (items.length === 0) {
            await conexion.rollback()

            return res.status(400).json({
                mensaje: "El carrito está vacío"
            })
        }

        //Calcular el total
        let total = 0

        for (const item of items) {
            let precio

            if (item.id_producto) {
                const [producto] = await conexion.query("SELECT precio_unitario FROM productos WHERE id = ?",[item.id_producto])

                if (producto.length === 0) {
                    throw new Error("Producto no encontrado")
                }

                precio = producto[0].precio_unitario
            } else {
                const [combo] = await conexion.query("SELECT precio FROM combos WHERE id = ?",[item.id_combo])

                if (combo.length === 0) {
                    throw new Error("Combo no encontrado")
                }

                precio = combo[0].precio
            }

            total += precio * item.cantidad
        }

        //Crear pedido
        const [pedido] = await conexion.query("INSERT INTO pedidos (id_usuario, total) VALUES (?, ?)", [id_usuario, total])

        //Guardar los items y descontar stock
        for (const item of items) {
            let precio
            const producto_id = item.id_producto
            const combo_id = item.id_combo

            if (producto_id) {
                const [producto] = await conexion.query("SELECT precio_unitario FROM productos WHERE id = ?",[producto_id])

                precio = producto[0].precio_unitario
            } else {
                const [combo] = await conexion.query("SELECT precio FROM combos WHERE id = ?",[combo_id])

                precio = combo[0].precio
            }

            await conexion.query("INSERT INTO pedido_items(id_pedido, id_producto, id_combo, cantidad, precio)VALUES (?, ?, ?, ?, ?)",[pedido.insertId, producto_id, combo_id,item. cantidad, precio])

            if (producto_id) {
                const [stock] = await conexion.query("UPDATE productos SET cantidad = cantidad - ? WHERE id = ? AND cantidad >= ?", [item.cantidad, producto_id, item.cantidad])

                if (stock.affectedRows === 0) {
                    throw new Error("Stock insuficiente")
                }
            } else {
                const [componentes] = await conexion.query("SELECT id_producto, cantidad FROM combo_producto WHERE id_combo = ?", [combo_id])

                for (const componente of componentes) {
                    const cantidadNecesaria = componente.cantidad * item.cantidad

                    const [stock] = await conexion.query("UPDATE productosSET cantidad = cantidad - ? WHERE id = ? AND cantidad >= ?",[cantidadNecesaria, componente.id_producto, cantidadNecesaria])

                    if (stock.affectedRows === 0) {
                        throw new Error("Stock insuficiente")
                    }
                }
            }
        }

        //Vaciar carrito
        await conexion.query("DELETE FROM carrito_items WHERE id_usuario = ?", [id_usuario])

        await conexion.commit()

        return res.status(201).json({
            mensaje: "Pedido creado correctamente",
            id_pedido: pedido.insertId,
            total: total
        })

    } catch (error) {
        await conexion.rollback()

        console.error(error)

        return res.status(500).json({
            mensaje: "Error al crear el pedido"
        })
    } finally {
        conexion.release()
    }
}

module.exports = { 
    mostrarPedidos,
    mostrarPedido,
    terminarPedido,
    crearPedido 
}