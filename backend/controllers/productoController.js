const con = require("../db")


const obtenerProductos = async (req, res) => {
    try {
        const [productos] = await con.query("SELECT * FROM productos")

        res.json(productos)

    } catch (error) {
        console.log(error)

        res.status(500).json({
            mensaje: "Error al obtener productos"
        })
    }
}


const obtenerProducto = async (req, res) => {
    try {
        const { id } = req.params

        // Validar ID
        if (!/^\d+$/.test(id) || Number(id) <= 0) {
            return res.status(400).json({
                mensaje: "El ID debe ser un número entero positivo"
            })
        }

        const [producto] = await con.query(
            "SELECT * FROM productos WHERE id = ?",
            [id]
        )

        if (producto.length === 0) {
            return res.status(404).json({
                mensaje: "Producto no encontrado"
            })
        }

        res.json(producto)

    } catch (error) {
        console.log(error)

        res.status(500).json({
            mensaje: "Error al obtener producto"
        })
    }
}


const crearProducto = async (req, res) => {
    try {
        let {
            nombre,
            cantidad,
            categoria,
            precio,
            descripcion
        } = req.body


        // Validar tipos
        if (
            typeof nombre !== "string" ||
            typeof cantidad !== "string" ||
            typeof categoria !== "number" ||
            typeof precio !== "number" ||
            typeof descripcion !== "string"
        ) {
            return res.status(400).json({
                mensaje: "Los datos tienen un formato incorrecto"
            })
        }


        // Quitar espacios
        nombre = nombre.trim()
        cantidad = cantidad.trim()
        descripcion = descripcion.trim()


        // Campos vacíos
        if (!nombre || !cantidad || !descripcion) {
            return res.status(400).json({
                mensaje: "No se permiten campos vacíos"
            })
        }


        // Longitud nombre
        if (nombre.length > 100) {
            return res.status(400).json({
                mensaje: "El nombre no puede superar los 100 caracteres"
            })
        }


        // Longitud imagen
        if (cantidad.length > 10000) {
            return res.status(400).json({
                mensaje: "La cantidad no puede superar las 10000 unidades"
            })
        }


        // Longitud descripción
        if (descripcion.length > 255) {
            return res.status(400).json({
                mensaje: "La descripción no puede superar los 255 caracteres"
            })
        }


        // Precio
        if (!Number.isFinite(precio) || precio <= 0) {
            return res.status(400).json({
                mensaje: "El precio debe ser un número mayor a 0"
            })
        }


        // Categoría
        if (!Number.isInteger(categoria) || categoria <= 0) {
            return res.status(400).json({
                mensaje: "La categoría debe ser un número entero positivo"
            })
        }

        const [categoriaExiste] = await con.query("SELECT id_c FROM categorias WHERE id_c = ?", [categoria])

        if(categoriaExiste.length === 0){
            return res.status(400).json({
                mensaje: "La categoria no existe"
            })
        }


        const [producto] = await con.query(
            `INSERT INTO productos
            (nombre, cantidad, fk_categoria, precio_unitario, ultima_modificacion, descripcion)
            VALUES (?, ?, ?, ?, NOW(), ?)`,
            [nombre, cantidad, categoria, precio, descripcion]
        )


        res.status(201).json({
            mensaje: "Producto creado",
            id: producto.insertId
        })

    } catch (error) {
        console.log(error)

        res.status(500).json({
            mensaje: "Error al crear producto"
        })
    }
}


const actualizarProducto = async (req, res) => {
    try {
        const { id } = req.params

        let {
            nombre,
            cantidad,
            categoria,
            precio,
            descripcion
        } = req.body


        // Validar ID
        if (!/^\d+$/.test(id) || Number(id) <= 0) {
            return res.status(400).json({
                mensaje: "El ID debe ser un número entero positivo"
            })
        }


        // Validar tipos
        if (
            typeof nombre !== "string" ||
            typeof cantidad !== "string" ||
            typeof categoria !== "number" ||
            typeof precio !== "number" ||
            typeof descripcion !== "string"
        ) {
            return res.status(400).json({
                mensaje: "Los datos tienen un formato incorrecto"
            })
        }


        // Quitar espacios
        nombre = nombre.trim()
        cantidad = cantidad.trim()
        descripcion = descripcion.trim()


        // Campos vacíos
        if (!nombre || !cantidad || !descripcion) {
            return res.status(400).json({
                mensaje: "No se permiten campos vacíos"
            })
        }


        // Longitud nombre
        if (nombre.length > 100) {
            return res.status(400).json({
                mensaje: "El nombre no puede superar los 100 caracteres"
            })
        }


        // Longitud imagen
        if (cantidad.length > 10000) {
            return res.status(400).json({
                mensaje: "La cantidad no puede superar 10000 unidades"
            })
        }


        // Longitud descripción
        if (descripcion.length > 255) {
            return res.status(400).json({
                mensaje: "La descripción no puede superar los 255 caracteres"
            })
        }


        // Precio
        if (!Number.isFinite(precio) || precio <= 0) {
            return res.status(400).json({
                mensaje: "El precio debe ser un número mayor a 0"
            })
        }


        // Categoría
        if (!Number.isInteger(categoria) || categoria <= 0) {
            return res.status(400).json({
                mensaje: "La categoría debe ser un número entero positivo"
            })
        }

        const [categoriaExiste] = await con.query("SELECT id_c FROM categorias WHERE id_c = ?", [categoria])

        if(categoriaExiste.length === 0){
            return res.status(400).json({
                mensaje: "La categoria no existe"
            })
        }

        const [producto] = await con.query(
            `UPDATE productos
            SET nombre = ?,
                cantidad = ?,
                fk_categoria = ?,
                precio_unitario = ?,
                ultima_modificacion = NOW(),
                descripcion = ?
            WHERE id = ?`,
            [nombre, cantidad, categoria, precio, descripcion, id]
        )


        if (producto.affectedRows === 0) {
            return res.status(404).json({
                mensaje: "Producto no encontrado"
            })
        }


        res.json({
            mensaje: "Producto actualizado",
            filas: producto.affectedRows
        })

    } catch (error) {
        console.log(error)

        res.status(500).json({
            mensaje: "Error al actualizar producto"
        })
    }
}


const eliminarProducto = async (req, res) => {
    try {
        const { id } = req.params


        // Validar ID
        if (!/^\d+$/.test(id) || Number(id) <= 0) {
            return res.status(400).json({
                mensaje: "El ID debe ser un número entero positivo"
            })
        }


        const [producto] = await con.query(
            "DELETE FROM productos WHERE id = ?",
            [id]
        )


        if (producto.affectedRows === 0) {
            return res.status(404).json({
                mensaje: "Producto no encontrado"
            })
        }


        res.json({
            mensaje: "Producto eliminado",
            filas: producto.affectedRows
        })

    } catch (error) {
        console.log(error)

        res.status(500).json({
            mensaje: "Error al eliminar producto"
        })
    }
}

const modificarCantidad = async (req, res) => {
    try {
        const { id } = req.params
        const { cantidad, operacion } = req.body

        // Validar ID
        if (!/^\d+$/.test(id) || Number(id) <= 0) {
            return res.status(400).json({
                mensaje: "El ID debe ser un número entero positivo"
            })
        }

        if(!cantidad || !operacion){
            return res.status(400).json({
                mensaje: "No se permiten campos vacios"
            })
        }

        // Validar cantidad
        if (!Number.isInteger(cantidad) || cantidad <= 0) {
            return res.status(400).json({
                mensaje: "La cantidad debe ser un número entero positivo"
            })
        }

        // Validar operación
        if (operacion !== "sumar" && operacion !== "restar") {
            return res.status(400).json({
                mensaje: "La operación debe ser 'sumar' o 'restar'"
            })
        }

        // Buscar producto
        const [productos] = await con.query(
            "SELECT id, cantidad FROM productos WHERE id = ?",
            [id]
        )

        if (productos.length === 0) {
            return res.status(404).json({
                mensaje: "Producto no encontrado"
            })
        }

        const producto = productos[0] //Chekear porque se hace esto

        // Calcular nueva cantidad
        let nuevaCantidad

        if (operacion === "sumar") {
            nuevaCantidad = producto.cantidad + cantidad
        } else {
            nuevaCantidad = producto.cantidad - cantidad
        }

        // Evitar stock negativo
        if (nuevaCantidad < 0) {
            return res.status(400).json({
                mensaje: "No hay suficiente cantidad disponible"
            })
        }

        // Actualizar cantidad
        await con.query(
            "UPDATE productos SET cantidad = ? WHERE id = ?",
            [nuevaCantidad, id]
        )

        res.json({
            mensaje: "Cantidad actualizada",
            cantidad: nuevaCantidad
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            mensaje: "Error al modificar la cantidad"
        })
    }
}


module.exports = {
    obtenerProductos,
    obtenerProducto,
    crearProducto,
    actualizarProducto,
    eliminarProducto,
    modificarCantidad
}
