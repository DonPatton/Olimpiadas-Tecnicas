const errorMiddleware = (error, req, res, next) => {
    console.log(error)

    res.status(500).json({
        mensaje: "Error del servidor"
    })
}

module.exports = errorMiddleware
