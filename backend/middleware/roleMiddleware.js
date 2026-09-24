const verificarRol = (rolPermitido) => {
    return (req, res, next) => {

        
        console.log("Rol del usuario:", req.usuario.rol);
        console.log("Rol permitido:", rolPermitido);
        
        if(req.usuario.rol !== rolPermitido){
            return res.status(403).json({
                mensaje: "No tienes permisos necesarios para realizar esta accion"
            })
        }

        next()
    }
}

module.exports = {
    verificarRol
}