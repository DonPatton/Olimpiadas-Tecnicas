const con = require("../db")


//Obtener todos
const obtenerProductos = async (req, res) => {
    try {
        const [productos] = await con.query("SELECT * FROM categorias")
    
        res.json(productos)
    } catch (error) {
        console.log(error)

        res.status(500).json({
            mensaje: "Error al obtener la categoria"
        })
    }

}

//Obtener uno
const obtenerProducto = async (req, res) => {
    try {
        const { id }  = req.params
    
        const [productos] = await con.query("SELECT * FROM categorias WHERE id_c = ?", [id])

        if(productos.length === 0){
            return res.status(404).json({
                mensaje: "Producto no encontrados"
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

const crearProducto = async (req, res) => {
    
    try {
        const { nombre, descripcion } = req.body
    
        const [productos] = await con.query("INSERT INTO categorias (nombre, descripcion) VALUES (?, ?)", [nombre, descripcion] )
    
        res.json({
            mensaje: "Producto creado",
            id: productos.insertId
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            mensaje: "Error al obtener la categoria"
        })
    }
}


const actualizarProducto = async (req, res) => {
    
    try {
       const { id }  = req.params 
       const { nombre, descripcion } = req.body
    
       const [productos] = await con.query("UPDATE categorias SET nombre = ?, descripcion = ? WHERE id_c = ?", [nombre, descripcion, id])

       if(productos.affectedRows === 0){
        res.status(404).json({
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
            mensaje: "Error al obtener la categoria"
        })
   }
}



const eliminarProducto = async (req, res) => {
    try {
        const { id }  = req.params 
    
        const [productos] = await con.query("DELETE FROM categorias WHERE id_c = ?",[id])

        if(productos.affectedRows === 0){
            res.status(404).json({
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
            mensaje: "Error al obtener la categoria"
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