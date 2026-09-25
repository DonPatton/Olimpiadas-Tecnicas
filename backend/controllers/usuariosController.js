const con = require("../db")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


const registrarUsuario = async (req, res) => {
    try {
        let { nombre, email, password } = req.body


        // Validar tipos
        if (
            typeof nombre !== "string" ||
            typeof email !== "string" ||
            typeof password !== "string"
        ) {
            return res.status(400).json({
                mensaje: "Los datos tienen un formato incorrecto"
            })
        }


        // Quitar espacios
        nombre = nombre.trim()
        email = email.trim().toLowerCase()


        // Campos vacíos
        if (!nombre || !email || !password) {
            return res.status(400).json({
                mensaje: "Los campos son obligatorios"
            })
        }


        // Validar nombre
        if (nombre.length < 2 || nombre.length > 100) {
            return res.status(400).json({
                mensaje: "El nombre debe tener entre 2 y 100 caracteres"
            })
        }


        // Validar email
        if (email.length > 150 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return res.status(400).json({
                mensaje: "Email no válido"
            })
        }


        // Validar contraseña
        if (password.length < 8) {
            return res.status(400).json({
                mensaje: "La contraseña debe tener mínimo 8 caracteres"
            })
        }


        // Comprobar si el email ya existe
        const [usuarios] = await con.query(
            "SELECT id FROM usuarios WHERE email = ?",
            [email]
        )


        if (usuarios.length > 0) {
            return res.status(400).json({
                mensaje: "Email ya registrado"
            })
        }


        // Encriptar contraseña
        const passwordHash = await bcrypt.hash(password, 10)


        // Crear usuario
        const [resultado] = await con.query(
            `INSERT INTO usuarios
            (nombre, email, password_hash, rol)
            VALUES (?, ?, ?, ?)`,
            [nombre, email, passwordHash, "usuario"]
        )


        res.status(201).json({
            mensaje: "Usuario creado",
            id: resultado.insertId
        })


    } catch (error) {
        console.log(error)

        res.status(500).json({
            mensaje: "Error al registrar usuario"
        })
    }
}


const iniciarSesion = async (req, res) => {
    try {
        let { email, password } = req.body


        // Validar tipos
        if (
            typeof email !== "string" ||
            typeof password !== "string"
        ) {
            return res.status(400).json({
                mensaje: "Los datos tienen un formato incorrecto"
            })
        }


        // Quitar espacios del email
        email = email.trim().toLowerCase()


        // Campos vacíos
        if (!email || !password) {
            return res.status(400).json({
                mensaje: "Los campos no deben estar vacíos"
            })
        }


        // Validar email
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return res.status(400).json({
                mensaje: "Email no válido"
            })
        }


        // Buscar usuario
        const [usuarios] = await con.query(
            `SELECT id, nombre, email, password_hash, rol
             FROM usuarios
             WHERE email = ?`,
            [email]
        )


        // No revelar si el email existe
        if (usuarios.length === 0) {
            return res.status(401).json({
                mensaje: "Credenciales incorrectas"
            })
        }


        const usuario = usuarios[0]


        // Comparar contraseña
        const passwordCorrecta = await bcrypt.compare(
            password,
            usuario.password_hash
        )


        if (!passwordCorrecta) {
            return res.status(401).json({
                mensaje: "Credenciales incorrectas"
            })
        }


        // Crear token
        const token = jwt.sign(
            {
                id: usuario.id,
                rol: usuario.rol
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "3h"
            }
        )


        res.json({
            mensaje: "Inicio correcto",
            token
        })


    } catch (error) {
        console.log(error)

        res.status(500).json({
            mensaje: "Error al iniciar sesión"
        })
    }
}


module.exports = {
    registrarUsuario,
    iniciarSesion
}
