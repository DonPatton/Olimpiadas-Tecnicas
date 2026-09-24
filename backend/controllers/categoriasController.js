const con = require("../db")


// Obtener todos
const obtenerProductos = async (req, res) => {
    try {
        const [productos] = await con.query("SELECT * FROM categorias")

        console.log(req.usuario)

        res.json(productos)
    } catch (error) {
        console.log(error)

        res.status(500).json({
            mensaje: "Error al obtener las categorias"
        })
    }
}


// Obtener uno
const obtenerProducto = async (req, res) => {
    try {
        const { id } = req.params

        // Validar ID
        if (!/^\d+$/.test(id) || Number(id) <= 0) {
            return res.status(400).json({
                mensaje: "El ID debe ser un número entero positivo"
            })
        }

        const [productos] = await con.query(
            "SELECT * FROM categorias WHERE id_c = ?",
            [id]
        )

        if (productos.length === 0) {
            return res.status(404).json({
                mensaje: "Producto no encontrado"
            })
        }

        res.json(productos)

    } catch (error) {
        console.log(error)

        res.status(500).json({
            mensaje: "Error al obtener la categoria"
        })
    }
}


// Crear
const crearProducto = async (req, res) => {

    try {
        let { nombre, descripcion } = req.body

        // Validar que sean strings
        if (typeof nombre !== "string" || typeof descripcion !== "string") {
            return res.status(400).json({
                mensaje: "Nombre y descripcion deben ser texto"
            })
        }

        // Quitar espacios al principio y final
        nombre = nombre.trim()
        descripcion = descripcion.trim()

        // Validar campos vacíos
        if (!nombre || !descripcion) {
            return res.status(400).json({
                mensaje: "No se permiten campos vacios"
            })
        }

        // Validar longitud
        if (nombre.length > 50) {
            return res.status(400).json({
                mensaje: "No se permiten mas de 50 caracteres en el nombre"
            })
        }

        if (descripcion.length > 255) {
            return res.status(400).json({
                mensaje: "No se permiten mas de 255 caracteres en la descripcion"
            })
        }

        const [productos] = await con.query(
            "INSERT INTO categorias (nombre, descripcion) VALUES (?, ?)",
            [nombre, descripcion]
        )

        res.status(201).json({
            mensaje: "Producto creado",
            id: productos.insertId
        })

    } catch (error) {
        console.log(error)

        res.status(500).json({
            mensaje: "Error al crear la categoria"
        })
    }
}


// Actualizar
const actualizarProducto = async (req, res) => {

    try {
        const { id } = req.params
        let { nombre, descripcion } = req.body

        // Validar ID
        if (!/^\d+$/.test(id) || Number(id) <= 0) {
            return res.status(400).json({
                mensaje: "El ID debe ser un número entero positivo"
            })
        }

        // Validar tipos
        if (typeof nombre !== "string" || typeof descripcion !== "string") {
            return res.status(400).json({
                mensaje: "Nombre y descripcion deben ser texto"
            })
        }

        nombre = nombre.trim()
        descripcion = descripcion.trim()

        // Validar campos vacíos
        if (!nombre || !descripcion) {
            return res.status(400).json({
                mensaje: "No se permiten campos vacios"
            })
        }

        // Validar longitud
        if (nombre.length > 50) {
            return res.status(400).json({
                mensaje: "No se permiten mas de 50 caracteres en el nombre"
            })
        }

        if (descripcion.length > 255) {
            return res.status(400).json({
                mensaje: "No se permiten mas de 255 caracteres en la descripcion"
            })
        }

        const [productos] = await con.query(
            "UPDATE categorias SET nombre = ?, descripcion = ? WHERE id_c = ?",
            [nombre, descripcion, id]
        )

        if (productos.affectedRows === 0) {
            return res.status(404).json({
                mensaje: "Producto no encontrado"
            })
        }

        res.json({
            mensaje: "Producto actualizado",
            filas: productos.affectedRows
        })

    } catch (error) {
        console.log(error)

        res.status(500).json({
            mensaje: "Error al actualizar la categoria"
        })
    }
}


// Eliminar
const eliminarProducto = async (req, res) => {

    try {
        const { id } = req.params

        // Validar ID
        if (!/^\d+$/.test(id) || Number(id) <= 0) {
            return res.status(400).json({
                mensaje: "El ID debe ser un número entero positivo"
            })
        }

        const [productos] = await con.query(
            "DELETE FROM categorias WHERE id_c = ?",
            [id]
        )

        if (productos.affectedRows === 0) {
            return res.status(404).json({
                mensaje: "Producto no encontrado"
            })
        }

        res.json({
            mensaje: "Producto eliminado",
            filas: productos.affectedRows
        })

    } catch (error) {
        console.log(error)

        res.status(500).json({
            mensaje: "Error al eliminar la categoria"
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
