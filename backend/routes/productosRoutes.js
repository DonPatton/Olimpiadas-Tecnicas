const express = require("express")
const router = express.Router()

const {
    obtenerProductos,
    obtenerProducto,
    crearProducto,
    actualizarProducto,
    eliminarProducto,
    modificarCantidad
} = require("../controllers/productoController.js")

const { verificarToken } = require("../middleware/authMiddleware.js")
const { verificarRol } = require("../middleware/roleMiddleware.js")

router.get("/", verificarToken, obtenerProductos),
router.get("/:id", verificarToken, obtenerProducto),
router.post("/", verificarToken, verificarRol("admin"), crearProducto),
router.put("/:id", verificarToken, verificarRol("admin"), actualizarProducto),
router.delete("/:id", verificarToken, verificarRol("admin"), eliminarProducto),
router.patch("/:id/stock", verificarToken, modificarCantidad)

module.exports = router;