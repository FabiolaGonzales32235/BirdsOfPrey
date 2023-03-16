const express = require('express');
const { json } = require('express/lib/response');
const res = require('express/lib/response');
const app = express();
const morgan = require('morgan');

//CONFIGURACIONES 
app.set('port', 3000);
app.set('json spaces',2);

//MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());

//RUTAS
app.use('/api/data',require('./routes/rutas'));

//COMENZANDO SERVIDOR
app.listen(app.get('port'));
console.log("mi primer servidor");