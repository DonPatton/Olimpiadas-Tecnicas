const express = require("express")
const router = express.Router()

const {
    obtenerProductos,
    obtenerProducto,
    crearProducto,
    actualizarProducto,
    eliminarProducto
} = require("../controllers/categoriasController.js")

const {
    verificarToken
} = require("../middleware/authMiddleware.js")

router.get("/", verificarToken, obtenerProductos),
router.get("/:id", verificarToken, obtenerProducto),
router.post("/",  verificarToken, crearProducto),
router.put("/:id", verificarToken, actualizarProducto),
router.delete("/:id", verificarToken, eliminarProducto)

module.exports = router;