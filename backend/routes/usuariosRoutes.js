const express = require("express")
const router = express.Router()
const rateLimit = require("express-rate-limit")

const {
    registrarUsuario,
    iniciarSesion
} = require("../controllers/usuariosController")

const loginLimiter = rateLimit({
    windowMs : 15 * 60 * 1000,
    max: 50,
    message: "Demaciados intentos, porfavor vuelva a intentar mas tarde."
})

router.post("/", loginLimiter, registrarUsuario)
router.post("/login", iniciarSesion)

module.exports = router;