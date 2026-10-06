const express = require("express")
const router = express.Router()

const {
    obtenerCombos,
    obtenerCombo,
    crearCombo,
    actualizarCombo,
    eliminarCombo
} = require("../controllers/combosController")

router.get("/", obtenerCombos)
router.get("/:id", obtenerCombo)
router.post("/", crearCombo)
router.put("/:id", actualizarCombo)
router.delete("/:id", eliminarCombo)

module.exports = router