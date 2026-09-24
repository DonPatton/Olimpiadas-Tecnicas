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

const { verificarRol } = require("../middleware/roleMiddleware.js")

router.get("/", verificarToken, verificarRol("admin"), obtenerProductos), //Implementar qué hacemos cuando un usuario cambia de rol, es eliminado, desactivado, etc., mientras todavía tiene un JWT válido.
router.get("/:id", verificarToken, obtenerProducto),
router.post("/",  verificarToken, crearProducto),
router.put("/:id", verificarToken, actualizarProducto),
router.delete("/:id", verificarToken, eliminarProducto)

module.exports = router;