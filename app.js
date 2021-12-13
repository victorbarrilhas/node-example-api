const express = require('express');
const app = express();
const morgan = require('morgan');

const rotaProdutos = require ('./routes/produtos');
const rotaPedidos = require ('./routes/pedidos');

app.use(morgan('dev'));

app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos);

app.use((request, response, next) => {
    const erro = new Error('Não Encontrado');
    erro.status = 404;
    next(erro);
});

app.use((error, request, response, next) =>{
    response.status(error.status || 500);
    return response.send({
        erro: {
            mensagem: error.message
        }
    });
});

module.exports = app;