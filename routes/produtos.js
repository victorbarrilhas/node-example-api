const express = require('express');
const router = express.Router();

//RETORNA TODOS OS PRODUTOS
router.get('/', (request, response, next) => {
    response.status(200).send({
        mensagem: 'Usando o GET dentro da rota de produtos'
    });
});

// INSERE UM PRODUTO
router.post('/', (request, response, next) => {

    const produto = {
        nome: request.body.nome,
        preco: request.body.preco,
    }

    response.status(201).send({
        mensagem: 'Insere um Produto',
        produtoCriado: produto
    });
});

// RETORNA OS DADOS DE UM PRODUTO
router.get('/:id_produto', (request, response, next) => {
    const id = request.params.id_produto

    if (id ==='especial') {
        response.status(200).send({
            mensagem: 'Você descobriu o ID especial',
            id: id
        });
    }   else {
        response.status(200).send({
            mensagem: 'Você passou um ID'
        });
    }

    response.status(200).send({
        mensagem: 'Usando o GET de um produto exclusivo',
        id: id
    });
})

// ALTERA UM PRODUTO
router.patch('/', (request, response, next) => {
    response.status(201).send({
        mensagem: 'USNANDO PATCH DENTRO DA ROTA DE PRODUTOS'
    })
})

// EXCLUI UM PRODUTO
router.delete('/', (request, response, next) => {
    response.status(201).send({
        mensagem: 'USNANDO DELETE DENTRO DA ROTA DE PRODUTOS'
    })
})

module.exports = router;