const con = require("../db")

const obtenerProductos = async (req, res) => {
    try {
        const [producto] = await con.query("SELECT * FROM productos")

        res.json(producto)
    } catch (error) {
        console.log(error)

        res.status(500).json({
            mensaje: "error al obtener producto"
        })
    }
}

const obtenerProducto = async (req, res) => {
    try {
        const { id } = req.params

        const [producto] = await con.query("SELECT * FROM productos WHERE id = ?", [id])

        res.json(producto)
    } catch (error) {
        console.log(error)

        res.status(500).json({
            mensaje: "error al obtener producto"
        })
    }
}

const crearProducto = async (req, res) => {
    try {
        const { nombre, img, categoria, precio, descripcion } = req.body

        const [producto] = await con.query("INSERT INTO productos (nombre, img, fk_categoria, precio_unitario, descripcion) values (?, ?, ?, ?, ?)", [nombre, img, categoria, precio, descripcion])

        res.json({
            mensaje: "Producto creado",
            id: producto.insertId
        })
        
    } catch (error) {
        console.log(error)

        res.status(500).json({
            mensaje: "error al obtener producto"
        })
    }
}

const actualizarProducto = async (req, res) => {
    try {
        const { id } = req.params
        const { nombre, img, categoria, precio, descripcion } = req.body

        const[producto] = await con.query("UPDATE productos SET nombre = ?, img = ?, fk_categoria = ?, precio_unitario = ?, descripcion = ?", [nombre, img, categoria, precio, descripcion])

        res.json({
            mensaje: "Producto actualizado",
            filas: producto.affectedRows
        })
    } catch (error) {
        console.log(error)

        res.status(500).json({
            mensaje: "error al obtener producto"
        })
    }
}

const eliminarProducto = async (req, res) => {
    try {
        const { id } = req.params

        const [producto] = await con.query("DELETE FROM productos WHERE id = ?", [id])

        res.json({
            mensaje: "Producto eliminado",
            filas: producto.affectedRows
        })
    } catch (error) {
        console.log(error)

        res.status(500).json({
            mensaje: "error al obtener producto"
        })
    }
}

module.exports = {
    obtenerProductos,
    obtenerProducto,
    crearProducto,
    actualizarProducto,
    eliminarProducto
}