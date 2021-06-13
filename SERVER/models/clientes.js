const {Schema, model} = require('mongoose')

const clienteschema = new Schema({
    cedula:{type: String, required: true},
    nombre:{type: String, required: true},
    apellido:{type: String, required: true},
    mail:{type: String, required: true},
}, {
    timestamps: true,
    versionKey:false
})

module.exports = model("cliente",clienteschema);
