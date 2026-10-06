const con = require("../db")


const obtenerMovimientosStock = async (req, res) => {
    try {
        const [movimientos] = await con.query(
            `SELECT
                m.id,
                m.fk_producto,
                p.nombre AS producto,
                m.cantidad_anterior,
                m.cantidad_nueva,
                m.motivo,
                m.origen,
                m.fk_usuario,
                u.nombre AS usuario,
                m.fecha
            FROM movimientos_stock m
            JOIN productos p ON p.id = m.fk_producto
            LEFT JOIN usuarios u ON u.id = m.fk_usuario
            ORDER BY m.fecha DESC`
        );

        res.json(movimientos)

    } catch (error) {
        console.log(error)

        res.status(500).json({
            mensaje: "Error al obtener los movimientos de stock"
        })
    }
}


module.exports = {
    obtenerMovimientosStock
}