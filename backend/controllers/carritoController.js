const con = require("../db")

const obtenerCarrito = async (req, res) => {
    const [carrito] = await con.query("SELECT * FROM carrito_items")

    res.json(carrito)
}

const obtenerItem = async (req, res) => {
    const { id } = req.params
    const id_usuario = req.usuario.id

    const [item] = await con.query("SELECT * FROM carrito_items WHERE id = ? AND id_usuario = ?", [id, id_usuario])

    if(item.length === 0){
        return res.status(404).json({
            mensaje: "Item no encontrado"
        })
    }

    res.json(item[0])
}

const agregarItem = async (req, res) => {
    const { id_producto, id_combo, cantidad} = req.body
    const id_usuario = req.usuario.id

    if((id_producto && id_combo) || (!id_producto && !id_combo)){
        return res.status(400).json({
            mensaje: "No se pueden enviar ambos valores a la ves"
        })
    }

    const [item] = await con.query("SELECT * FROM carrito_items WHERE id_usuario = ? AND id_producto <=> ? AND id_combo <=> ?", [id_usuario, id_producto || null, id_combo || null])

    if(item.length > 0){
        await con.query("UPDATE carrito_items SET cantidad = cantidad + ? WHERE id = ?", [cantidad, item[0].id])
    }
    else{
        await con.query("INSERT INTO carrito_items (id_usuario, id_producto, id_combo, cantidad) VALUES (?, ?, ?, ?)", [id_usuario, id_producto || null, id_combo || null, cantidad])
    }

    res.status(201).json({
        mensaje: "items agregado"
    })
}

const actualizarItem = async (req, res) => {
    const { id } = req.params
    const { cantidad } = req.body
    const id_usuario = req.usuario.id

    const [item] = await con.query("UPDATE carrito_items SET cantidad = ? WHERE id = ? AND id_usuario = ?", [cantidad, id, id_usuario])

    if(item.affectedRows === 0){
        return res.status(404).json({
            mensaje: "item no encontrado"
        })
    }

    res.json({
        mensaje: "Items actualizado"
    })
}

const eliminarItem = async (req, res) => {
    const { id } = req.params
    const id_usuario = req.usuario.id
    
    const [item] = await con.query("DELETE FROM carrito_items WHERE id = ? AND id_usuario = ?", [id, id_usuario])

    if(item.affectedRows === 0){
        return res.status(404).json({
            mensaje: "Item no encontrado"
        })
    }

    res.json({
        mensaje: "Item eliminado"
    })
}

const vaciarCarrito = async (req, res) => {
    const id_usuario = req.usuario.id

    const [carrito] = await con.query("DELETE FROM carrito_items WHERE id_usuario = ?", [id_usuario])

    if(carrito.affectedRows === 0){
        return res.status(404).json({
            mensaje: "Item no encontrado"
        })
    }

    res.json({
        mensaje: "Carrito eliminado"
    })
}

module.exports = {
    obtenerCarrito,
    obtenerItem,
    agregarItem,
    actualizarItem,
    eliminarItem,
    vaciarCarrito
}