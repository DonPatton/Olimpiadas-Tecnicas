const con = require("../db")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const registrarUsuario = async (req, res) => {
    try {
        const { nombre, email, password } = req.body

        if(!nombre || !email || !password){
            return res.status(400).json({
                mensaje: "Los campos son olbigatorios"
            })
        }

        const [usuarios] = await con.query("SELECT * FROM usuarios WHERE email = ?", [email])

        if(usuarios.length > 0){
            res.status(400).json({
                mensaje: "email ya registrado"
            })
        }

        const passwordHash = await bcrypt.hash(password, 10)

        const [resultado] = await con.query("INSERT INTO usuarios (nombre, email, password_hash, rol) values (?, ?, ?, ?)", [nombre, email, passwordHash,"usuario"])

        res.status(201).json({
            mensaje: "Usuario Creado",
            id: resultado.insertId
        })

    } catch (error) {
        console.log(error)

        res.status(500).json({
            mensaje : "error al registrar usuario"
        })
    }
}

const iniciarSesion = async (req ,res) => {
    try {
        const { email, password } = req.body

        if(!email || !password){
            return res.status(400).json({
                mensaje: "Los campos no deben estar vacios"
            })
        }

        const [usuarios] = await con.query("SELECT * FROM usuarios WHERE email = ?", [email])

        if(usuarios.length === 0 ){
            return res.status(401).json({
                mensaje: "credenciales incorrectas"
            })
        }

        const usuario = usuarios[0]

        const passwordCorrecta = await bcrypt.compare(password, usuario.password_hash)

        if(!passwordCorrecta){
            return res.status(401).json({
                mensaje: "Contraseña incorrecta"
            })
        }

        const token = jwt.sign(
            {
                id: usuario.id,
                rol: usuario.rol
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1h"
            }
        )

        res.json({
            mensaje: "Incio Correcto",
            token
        })

        

    } catch (error) {
        console.log(error)

        res.status(500).json({
            mensaje: "Error al iniciar sesion"
        })
    }
}

module.exports = {
    registrarUsuario,
    iniciarSesion
}