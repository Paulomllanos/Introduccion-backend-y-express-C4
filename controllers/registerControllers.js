const fs = require('fs')
let usersRegister = []

const obtenerUsuariosRegistrados = (req, res) => {
    try {

        fs.readFile('./userList.txt', 'utf-8', (error, data) => {
            if(error){
                console.log(error)
            } else {
                console.log(data)  
            }
        })

        res.json({success: true, message: usersRegister})
    } catch (error) {
        res.json({ success: false, message: error.message }) 
    }
}

const crearUsuario = (req, res) => {

    try {
        const userInfo = req.body

        usersRegister.push(userInfo)

        fs.appendFile('./fruitList.txt', 'Elisa', (error) => {
            if(error){
                console.log(error)
            } else {
                console.log('Contenido guardado con exito!!! ')
            }
        })

        res.json({success: true, message: "Usuario creado con exito!!!"})


    } catch (error) {
        res.json({ success: false, message: error.message }) 
    }
}

const actualizarUsuario = (req, res) => {
    try {
        const nombre = req.body.name


        fs.writeFile('./userList.txt', nombre , (error) => {
            if(error){
                console.log(error)
            } else {
                console.log('Se ha actualizado el archivo de texto!!!')
            }
        })

        res.json({success: true, message: "Usuario Actualizado con exito!!!"})

    } catch (error) {
        res.json({ success: false, message: error.message }) 
    }
}

module.exports = { obtenerUsuariosRegistrados, crearUsuario, actualizarUsuario }