const mongoose = require('mongoose')
mongoose
.connect('mongodb://localhost/mibase',{
    useUnifiedTopology:true,
    useNewUrlParser:true
})
    .then(db => console.log("Conexion a la base de datos realizado con exito"))
    .catch((err) => console.error(err));