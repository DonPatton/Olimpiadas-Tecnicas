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
            img,
            categoria,
            precio,
            descripcion
        } = req.body


        // Validar tipos
        if (
            typeof nombre !== "string" ||
            typeof img !== "string" ||
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
        img = img.trim()
        descripcion = descripcion.trim()


        // Campos vacíos
        if (!nombre || !img || !descripcion) {
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
        if (img.length > 255) {
            return res.status(400).json({
                mensaje: "La imagen no puede superar los 255 caracteres"
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

        const [categoriaExiste] = await con.query("SELECT id_c FROM categorias WHERE id_c = ?"[categoria])

        if(categoriaExiste.length === 0){
            return res.status(400).json({
                mensaje: "La categoria no existe"
            })
        }


        const [producto] = await con.query(
            `INSERT INTO productos
            (nombre, img, fk_categoria, precio_unitario, descripcion)
            VALUES (?, ?, ?, ?, ?)`,
            [nombre, img, categoria, precio, descripcion]
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
            img,
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
            typeof img !== "string" ||
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
        img = img.trim()
        descripcion = descripcion.trim()


        // Campos vacíos
        if (!nombre || !img || !descripcion) {
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
        if (img.length > 255) {
            return res.status(400).json({
                mensaje: "La imagen no puede superar los 255 caracteres"
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

        const [categoriaExiste] = await con.query("SELECT id_c FROM categorias WHERE id_c = ?"[categoria])

        if(categoriaExiste.length === 0){
            return res.status(400).json({
                mensaje: "La categoria no existe"
            })
        }

        const [producto] = await con.query(
            `UPDATE productos
            SET nombre = ?,
                img = ?,
                fk_categoria = ?,
                precio_unitario = ?,
                descripcion = ?
            WHERE id = ?`,
            [nombre, img, categoria, precio, descripcion, id]
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


module.exports = {
    obtenerProductos,
    obtenerProducto,
    crearProducto,
    actualizarProducto,
    eliminarProducto
}
