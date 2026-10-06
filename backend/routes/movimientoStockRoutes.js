const express = require("express")
const router = express.Router()

const {
    obtenerMovimientosStock
} = require("../controllers/movimientoStockController.js")

const { verificarToken } = require("../middleware/authMiddleware.js")

router.get("/", verificarToken, obtenerMovimientosStock)

module.exports = router;