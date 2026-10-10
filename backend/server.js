const express = require("express")
require("dotenv").config()
const app = express();
const cors = require("cors")
const helmet = require("helmet")
const categoriasRoutes = require("./routes/categoriasRoutes")
const productosRoutes = require("./routes/productosRoutes")
const usuariosRoutes = require("./routes/usuariosRoutes")
const combosRouter = require("./routes/combosRoutes")
const carritoRouter = require("./routes/carritoRoutes")
const pedidosRouter = require("./routes/pedidosRoutes")
const movimientoStockRoutes = require("./routes/movimientoStockRoutes")
const errorMiddleware = require("./middleware/errorMiddleware")

app.use(helmet())
//app.use(cors())
app.use(cors({
    origin: "http://127.0.0.1:5500"
}))
app.use(express.json());


//Rutas

app.use("/categorias", categoriasRoutes)
app.use("/productos", productosRoutes)
app.use("/usuarios", usuariosRoutes)
app.use("/combos", combosRouter)
app.use("/movimientos-stock", movimientoStockRoutes)
app.use("/carrito", carritoRouter)
app.use("/pedido", pedidosRouter)

app.use(errorMiddleware)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`)
})