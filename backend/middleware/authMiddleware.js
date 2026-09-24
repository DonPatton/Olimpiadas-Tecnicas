const jwt = require("jsonwebtoken")

const verificarToken = (req, res, next) => {
    const authHeader = req.headers.authorization

    if(!authHeader || !authHeader.startsWith("Bearer ")){
        return res.status(401).json({
            mensaje: "Token obligatorio"
        }) //Añadir un chekeo mas por si el usuario envia un token incorrecto
    }

    const token = authHeader.split(" ")[1]

    try {
        const usuario = jwt.verify(token, process.env.JWT_SECRET)

        req.usuario = usuario

        next()
    } catch (error) {
        console.log(error)

        res.status(401).json({
            mensaje: "Token invalido o expirado"
        })
    }



}

module.exports = {
    verificarToken
}