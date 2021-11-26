const express = require('express');
const app = express();

app.use('/teste',(request, response, next) => {
 response.status(200).send({
  mensagem: 'funcionando'
 });
});

module.exports = app;
