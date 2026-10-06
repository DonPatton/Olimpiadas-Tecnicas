const con = require("../db")

const obtenerCombos = async (req, res) => {
    const [combo] = await con.query("SELECT * FROM combos")
    
    res.json(combo)
}

const obtenerCombo = async (req, res) => {
    const { id } = req.params

    const [combo] = await con.query("SELECT * FROM combos WHERE id = ?", [id])

    res.json(combo)
}

const crearCombo = async (req, res) => {
    const { nombre, precio, descripcion, productos} = req.body

    const [combo] = await con.query("INSERT INTO combos (nombre, precio, descripcion) VALUES (?, ?, ?)", [nombre, precio, descripcion])

    const idCombo = combo.insertId

    for(const producto of productos){
        await con.query("INSERT INTO combo_producto (id_combo, id_producto, cantidad) VALUES (?, ?, ?)", [idCombo, producto.id, producto.cantidad])
    }

    res.status(201).json({
        mensaje: "Combo creado",
        id: idCombo
    })
}

const actualizarCombo =  async (req, res) => {
    const { id }  = req.params
    const  {nombre, precio, descripcion, productos} = req.body

    const [combo] = await con.query("UPDATE combos SET nombre = ?, precio = ?, descripcion = ? WHERE id = ?", [nombre, precio, descripcion, id])

    await con.query("DELETE FROM combo_producto WHERE id_combo = ?", [id])

    for(const producto of productos){
        await con.query("INSERT INTO combo_producto (id_combo, id_producto, cantidad) VALUES (?, ?, ?)", [id, producto.id, producto.cantidad])
    }

    res.status(201).json({
        mensaje: "Combo actualizado"
    })
}

const eliminarCombo = async (req, res) => {
    const { id } = req.params

    await con.query("DELETE FROM combo_producto WHERE id_combo = ?", [id])

    const [combo] = await con.query("DELETE FROM combos WHERE id = ?", [id])

    res.status(201).json({
        mensaje: "Combo Eliminado",
        filas: combo.affectedRows
    })
}

module.exports = {
    obtenerCombos,
    obtenerCombo,
    crearCombo,
    actualizarCombo,
    eliminarCombo
}