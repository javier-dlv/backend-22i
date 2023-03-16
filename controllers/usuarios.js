const {response,request} = require("express")
const Usuario = require("../models/usuario")

const usuariosGet = (req=request,res=response)=>{
    const {campo} = req.query
    res.json ({
        mensaje: "get usuarios del controlador",
       campo
    })
}

const usuariosPost = async(req=request,res=response)=>{
    
  const {nombre,apellido,email,edad} = req.body

  const usuario = new Usuario({nombre,apellido,email,edad})

  //verificar el correo
const existeEmail = await Usuario.findOne({correo})
if (existeEmail) {
    return res.status(400).json({
        msg:"el correo ya existe"
    })
}
  //encriptar la contraseña


  //guardar en la BS
await usuario.save()


  res.json({
      usuario,
      message:"usuario creado correctamente"
  })

  

}

const usuariosPut =(req=request,res=response)=>{
    res.json({
        mensaje: "Put usuarios"
    })
}


const usuariosDelete =(req=request,res=response)=>{
    res.json({
        mensaje: "Delete usuario"
    })
}

module.exports={
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
}