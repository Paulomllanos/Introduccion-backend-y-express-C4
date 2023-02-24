const express = require('express');
const app = express();
const registerRouter = require('./routes/registerRoute')
//! C = POST R = GET U = PUT D = DELETE

//* Nuestro servidor entienda json o otros
app.use(express.json())
app.use(registerRouter)

app.get("/friends", (req, res) => {
    //console.log(req)
    res.json({success: true, menssage: "Lista de Amigos"})
} )

//* CADA AMIGO DE FELIPE
app.get("/friends/:friend", (request, response) => {
    try {
        // throw new Error("Malo");
        console.log(request.params)
        const friend = request.params.friend
        console.log(request.params.friend)
        console.log('Probando el get!')


        const friends = ["paulo", "marta", "fernando", "matias", "jaffa"]

        if(friends.includes(request.params.friend)){
            response.json({
                success: true,
                menssage: `Estas en el perfil de: ${friend}`
            })
    } else {
        response.json({success: false, message: "Amigo no existe!!!"})
    }

     
    } catch (error) {
        response.json({ success: false, message: error.message })
    }    
    
    // response.json({success: true, message: "Has accecido cone xito a tus amigos!", info: [
    //     {
    //         name: friend,
    //     }
    // ]})
})

//* Parametros posicionales 

app.get("/friend/:firstname/:lastname", (req, res) => {
    const { firstname, lastname } = req.params
    console.log(req.params)
    res.json({success: true, mensaje: `Info de tu amigo: ${firstname} ${lastname}`})
})

//* QueryStrings

app.get("/friend", (req, res) => {
    const {firstname, lastname} = req.query
    console.log(req.query)
    res.json({success: true, mensaje: `Info de tu amigo: ${firstname} ${lastname}`})
})


app.listen(3000, () => console.log('Conectado en puerto 3000!!!'))

