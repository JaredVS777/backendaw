//Creacion de un wen server en EXPRESS
//Invocar la libreria EXPRESS
const express = require('express')//COMMNJS
//Crear una instancia
const app = express()
app.use(express.json())

//const {engine} =require('express-handlebars')
//import { engine } from 'express-handlebars';//ESMODULES


/*
//Mnadar infor en formato JSON
app.use(express.json())
app.get('/hamburguesa/simple',(req,res) => {
    res.send("Hamburguesa simple ")
})
*/


/*
//Devolver un JSON
app.get('/hamburguesa/mixta',(req,res) => {
    res.status(200).json({
        "tipo" : "Mixta",
        "extra" : "No"
    })
})
*/
/*
//devolver un documento o texto
app.get('/hamburguesa/triple',(req,res) => {
    res.sendFile('./triple.docx',{
        root:__dirname
    })
})
*/

//Devolver una imagen
/*
//shift+alt+teclaabajo
console.log(__dirname)
app.get('/hamburguesa/doble',(req,res) => {
    res.sendFile('./doble.jpg',{
        root: __dirname
    } )
})
*/
/*
//R E Q U E S T
//Query params ESTA FALLANDO
app.get(' /search', (req,res)=>{
    if(req.query.tipo === "sencilla")
    {
        res.send("Hamburguesa sencilla")

    }
    else{
        res.send("Otro tipo de hamburguesa")
    }
})
*/




/*
//Params permite hacer un pedido por una ruta
app.get('/pedido/:tipo',(req,res)=>{
    res.send(`El pedido es una hamburguesa ${req.params.tipo}`)
})
*/



/*
app.post('/register',(req,res) => {
    const{pedido, solicitado} = req.body //desustructuracion
    res.send(`El pedido de ${pedido} es realizado por ${solicitado}`) //respuesta
    

})
*/

//R O U T E
/*
//ruta raiz
app.get('/',(req,res) => { //REQ TODO LO QUE QUIERO MANDAR A LA RUTA O PETICION DEVOLVER AL USUARIO ES RES
    res.send("Bienvenidos") //ES UNA RUTA

})

//colocamos un dashboard en la ruta
    app.get('/dashboard',(req,res) => {
    res.send("Dashboard principal")
})

//rutas no registradas
app.use((req,res) => {
    res.send("404 - Not Found")
})




*/
/*
//Ruta publica
app.use(express.json())

app.get('/entrada',(req,res) => {
    res.send("Entrada al local")
})


//Crear un Middleware
//Ruta privada
app.use((req,res,next) => {
    const {email, password} = req.body
    if(email =="jared@gmail.com" && password ==="12345"){
        next()
    }
    else{
        res.send("Usuario no registrado")
    }
})

app.get('/pedido',(req,res) => {
    res.send(`Bienvenido -${req.body.email} - Listo para tomar su orden`)
})


*/

/*
//Utilizar un motor de plantillas
app.engine('handlebars', engine());
//Extension de las paginas
app.set('view engine', 'handlebars');
//Ubicacion del directorio views
app.set('views', './src/views');

app.get('/hamburguesa/vegana',(req,res) => {
    res.render('home')
})
*/

app.get('/ ',(req,res) => {
    res.send("Landing page")
})

app.get('/dashboard',(req,res) => {
    res.send("Landing page")
})


//Inicar el servidor en el puerto 3000
app.listen(3000)

console.log("Web server ejecutandose en el puesto 3000")
