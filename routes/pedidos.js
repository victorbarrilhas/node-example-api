const express = require("express");
const router = express.Router();

//RETORNA TODOS OS PEDIDOS
router.get("/", (request, response, next) => {
    response.status(200).send({
        mensagem: "Usando o GET dentro da rota de PEDIDOS",
    });
});

// INSERE UM PEDIDO
router.post("/", (request, response, next) => {
    const pedido = {
        id_produto: request.body.id_produto,
        quantidade: request.body.quantidade,
    };
    response.status(201).send({
        mensagem: "O pedido foi criado",
        pedidoCriado: pedido,
    });
});

// RETORNA OS DADOS DE UM PEDIDO
router.get("/:id_pedido", (request, response, next) => {
    const id = request.params.id_pedido;
    response.status(200).send({
        mensagem: "Usando o GET de um produto exclusivo",
        id_pedido: id,
    });
});

// EXCLUI UM PRODUTO
router.delete("/", (request, response, next) => {
    response.status(201).send({
        mensagem: "USNANDO DELETE DENTRO DA ROTA DE PRODUTOS",
    });
});

module.exports = router;
