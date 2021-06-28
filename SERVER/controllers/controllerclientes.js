const clientesctrl={}

const Cliente = require('../models/clientes')

clientesctrl.crearcliente = async(req, res) => { 
    const nuevocliente = new Cliente(req.body)
    await nuevocliente.save();
    res.json({ status: "Cliente creado satisfactoriamente" });
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
    await Cliente.findByIdAndUpdate(req.params.id,req.body)
    res.json({status:'Cliente actualizado'})
}

clientesctrl.deletecliente = async(req, res) => {
    await Cliente.findByIdAndDelete(req.params.id);
    res.json({status:"Cliente eliminado"})
}
module.exports = clientesctrl