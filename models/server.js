const express = require('express')
const cors = require('cors')
const {dbConection}=require("../databases/config")

class Server{
    constructor(){
        this.app = express()
        this.port =  process.env.PORT
        this.usuariosPath = "/api/usuarios"

        
        //conectar con base de datos
        this.conectarDB()

        //middlewares
        this.middlewares()

        //funcion para las rutas
        this.routes()


    }
    async conectarDB(){
        await dbConection()
    }

    
    middlewares(){
        //CORS
        this.app.use(cors())

        //LEER LO QUE ENVIA EL USUARIO POR EL CUERPO DE LA PETICION
        this.app.use(express.json())
        

        //DEFINIR LA CARPETA PUBLICA
        this.app.use(express.static("public"))
    }

    routes(){

        this.app.use(this.usuariosPath, require("../routes/usuarios"))
       /* this.app.get('/api/usuarios', function (req, res) {
            res.json({
                mensaje: "soy una api de usuarios"
            })
          })
          */
    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log("server online", this.port)
        })
    }
}


module.exports = Server