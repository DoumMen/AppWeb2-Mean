const clientesctrl={}

const Cliente = require('../models/clientes')

clientesctrl.crearcliente = async(req, res) => { 
    const ced = req.body.cedula;
    if (await Cliente.count({ cedula: ced }) == 0) {
        const nuevocliente = new Cliente({
            cedula: req.body.cedula,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            mail: req.body.mail,
        });
        console.log(nuevocliente);
        await nuevocliente.save();
        res.json({ status: "Cliente creado satisfactoriamente" });
    }else{
        res.json({status:"No se puede guardar ya que el numero de cedula ya existe"});
    }
}  

clientesctrl.getcliente = async (req, res) => {
    const elcliente = await Cliente.findById(req.params.id);
    res.send(elcliente) 
}

clientesctrl.getclientes = async(req, res) => {
    const listaclientes = await Cliente.find()
    res.json(listaclientes)
}

clientesctrl.editcliente = async(req, res) => {
    const codigo = req.params.id;
    const ced = req.body.cedula;
    if(await Cliente.count({$and: [{cedula:ced},{_id:{$ne:codigo}}]}) == 0){
        await Cliente.findByIdAndUpdate(req.params.id,req.body)
        res.json({status:'Cliente actualizado'})
    }else{
        res.json({status:"No se puede guardar ya que el numero de cedula ya existe"});
    }
}

clientesctrl.deletecliente = async(req, res) => {
    await Cliente.findByIdAndDelete(req.params.id);
    res.json({status:"Cliente eliminado"})
}
module.exports = clientesctrl