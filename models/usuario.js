//modelo de datos de usuarios

//nombre
//correo
//pasword
//img
//rol(User, admin)
//estado (true,false)

const {Schema,model} = require("mongoose")

const UsuarioSchema = Schema({
    nombre:{
        type:String,
        required:[true,"el nombre es obligatorio"]
    },

    correo:{
        type:String,
        required:[true,"el correo es obligatorio"],
        unique:true
    },

    pasword:{
        type:String,
        required:[true,"la contraseña es obligatoria"]
    },

    img:{
        type:String
    },

    rol:{
        type:String,
        required:true,
        enum:["USER_ROLE","ADMIN_ROLE"]
    },

    estado:{
        type:Boolean,
        default:true
    }
})

module.exports=model("Usuarios",UsuarioSchema)
