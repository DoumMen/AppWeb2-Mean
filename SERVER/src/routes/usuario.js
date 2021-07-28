const {Router} = require("express")
const usuario = require("../models/usuarios")
const router = Router()
const jwt = require("jsonwebtoken")

router.post('/registro',async (req,res)=>{
    const newuser = new usuario({
        nombre: req.body.nombre,
        email: req.body.email,
        clave: req.body.clave,
    });
    await newuser.save(); 
    console.log("Usuario registrado con exito");
    const token = jwt.sign({_id: newuser._id },'llavesecreta');
    res.json({token});
});

router.post('/login',async (req,res)=>{
    const {email,clave} = req.body;
    const eluser = await usuario.findOne({email: email});
    if(!eluser) return res.status(401).send("El correo que ingreso no existe");
    if(eluser.clave !== clave) return res.status(401).send("La clave ingresada es incorrecta");
    const token = jwt.sign({_id: eluser._id },'llavesecreta');
    res.json({token});
});

router.get('/ver',verificatoken,async (req,res)=>{
    const losuser = await usuario.find();
    res.send(losuser);
    res.send("Autorizado")
});

module.exports = router;

function verificatoken(req,res,next) {
    if(!req.headers.authorization){
        return res.status(401).send("No tiene autorizacion");
    }
    const token = req.headers.authorization.split(' ')[1];
    if (token === 'null'){
        return res.status(401).send("No tiene autorizacion");
    }
    const dato = jwt.verify(token,'llavesecreta');
    req.userid = dato._id;
    next();
 }
