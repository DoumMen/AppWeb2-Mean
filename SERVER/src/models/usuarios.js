const { Schema, model } = require('mongoose');

const usuarioschema = new Schema({
    nombre:{type: String, required: true},
    email:{type: String, required: true},
    clave:{type: String, required: true},
}, {
    timestamps: true
});

module.exports = model('usuario',usuarioschema);