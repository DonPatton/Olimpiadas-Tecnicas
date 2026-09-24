const express = require("express")
require("dotenv").config()
const app = express();
const cors = require("cors")
const categoriasRoutes = require("./routes/categoriasRoutes")
const productosRoutes = require("./routes/productosRoutes")
const usuariosRoutes = require("./routes/usuariosRoutes")

app.use(cors({
    origin: "http://127.0.0.1:5500"
}))
app.use(express.json());



//Rutas

app.use("/categorias", categoriasRoutes)
app.use("/productos", productosRoutes)
app.use("/usuarios", usuariosRoutes)


/*app.get("/categorias", async (req, res) =>{
    const [productos] = await con.query("SELECT * FROM categorias") 

    console.log(productos)
    res.json(productos)
})

app.get("/categorias/:id", async (req, res) => {
    const { id } = req.params

    const[productos] = await con.query("SELECT * FROM categorias WHERE id_c = ?", [id]) 

    res.json(productos)
})

app.post("/categorias", async (req, res) => {
    const  { nombre, descripcion } = req.body

    const [productos] = await con.query("INSERT INTO categorias (nombre, descripcion) values (?, ?)", [nombre, descripcion])
    res.json({
        mensaje: "Se creo el producto",
        id: productos.insertId
    }) //Revisar que pasa en caso de que NO se realice el insert
})

app.put("/categorias/:id", async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion } = req.body

    const[resultado] = await con.query("UPDATE categorias SET nombre = ?, descripcion = ? where id_c = ?", [nombre, descripcion, id]);

    res.json({
        mensaje: "Producto actualizado",
        filas: resultado.affectedRows //Cuando borramos un objeto y luego intantemos editarlo el mensaje nos muetra que si se actualizo a pesar de que no exista el objeto (0 rows afected)
    })
})

app.delete("/categorias/:id", async (req, res) => {
    const { id } = req.params

    const [resultado] = await con.query("DELETE FROM categorias WHERE id_c = ?", [id])

    res.json({
        mensaje: "Producto eliminado",
        filas: resultado.affectedRows
    })
})*/

app.listen(3000, () => {
    console.log("Servidor run")
})