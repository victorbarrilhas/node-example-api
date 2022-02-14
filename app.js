const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

const productRoute = require("./routes/product-route");
const categoryRoute = require("./routes/category-route");
const orderRoute = require("./routes/order-route");
const userRoute = require("./routes/user-route");
const imageRoute = require("./routes/image-route");

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

app.use("/products", productRoute);
app.use("/categories", categoryRoute);
app.use("/orders", orderRoute);
app.use("/users", userRoute);
app.use("/images", imageRoute);

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
