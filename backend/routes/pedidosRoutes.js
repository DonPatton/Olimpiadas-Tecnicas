const express = require("express")
const router = express.Router()

const {
    crearPedido,
    mostrarPedidos,
    mostrarPedido,
    terminarPedido
} = require("../controllers/pedidosController")

const { verificarToken } = require("../middleware/authMiddleware")

router.get("/", verificarToken, mostrarPedidos)
router.get("/:id", verificarToken, mostrarPedido)
router.patch("/:id", verificarToken, terminarPedido)
router.post("/", verificarToken, crearPedido)


module.exports = router