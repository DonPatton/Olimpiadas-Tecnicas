const res = await fetch("http://localhost:3000/categorias", {
    method: "POST",
    headers:{
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        nombre: nombre,
        descripcion: descripcion
    })
})