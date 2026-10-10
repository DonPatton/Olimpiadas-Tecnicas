const express = require("express")
const router = express.Router()

const {
    obtenerCarrito,
    obtenerItem,
    agregarItem,
    actualizarItem,
    eliminarItem,
    vaciarCarrito
} = require("../controllers/carritoController")

const { verificarToken } = require("../middleware/authMiddleware")

router.get("/",verificarToken, obtenerCarrito)
router.get("/:id", verificarToken, obtenerItem)
router.post("/", verificarToken, agregarItem)
router.put("/:id", verificarToken, actualizarItem)
router.delete("/:id", verificarToken, eliminarItem)
router.delete("/", verificarToken, vaciarCarrito)

module.exports = router