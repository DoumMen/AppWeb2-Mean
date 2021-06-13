const express = require('express')
const morgan = require('morgan')

const app = express()
app.set('port',3800);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/api/clientes",require('../routes/clientes'));
 
module.exports = app;