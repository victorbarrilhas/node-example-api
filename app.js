const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

const rotaProdutos = require("./routes/produtos");
const rotaPedidos = require("./routes/pedidos");
const rotaUsuarios = require("./routes/usuarios");
const rotaImagens = require("./routes/imagens");

app.use(morgan("dev"));
app.use("/uploads", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: false })); //apenas dados simples
app.use(bodyParser.json()); //json de entrada no body

app.use((request, response, next) => {
    response.header("Acces-Control-Allow-Origin", "*");
    response.header(
        "Acces-Control-Aloow-Header",
        "Origin, X-Requested-With, Content-Type, Authorization"
    );

    if (request.method === "OPTIONS") {
        response.header(
            "Acces-Control-Allow-Methods",
            "PUT, POST, PATCH, DELETE, GET"
        );
        return response.status(200).send({});
    }
    next();
});

app.use("/produtos", rotaProdutos);
app.use("/pedidos", rotaPedidos);
app.use("/usuarios", rotaUsuarios);
app.use("/imagens", rotaImagens);

app.use((request, response, next) => {
    const erro = new Error("Não Encontrado");
    erro.status = 404;
    next(erro);
});

app.use((error, request, response, next) => {
    response.status(error.status || 500);
    return response.send({
        erro: {
            mensagem: error.message,
        },
    });
});

module.exports = app;
