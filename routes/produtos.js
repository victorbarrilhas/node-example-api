const express = require("express");
const router = express.Router();
const mysql = require("../mysql").pool;

//RETORNA TODOS OS PRODUTOS
router.get("/", (request, response, next) => {
    //response.status(200).send({
    //  mensagem: 'Retorna todos os produtos',
    // });

    mysql.getConnection((error, conn) => {
        if (error) {
            return response.status(500).send({ error: error });
        }
        conn.query("SELECT * FROM produtos;", (error, resultado, fields) => {
            if (error) {
                return response.status(500).send({ error: error });
            }
            return response.status(200).send({ response: resultado });
        });
    });
});

// INSERE UM PRODUTO
router.post("/", (request, response, next) => {
    mysql.getConnection((error, conn) => {
        conn.query(
            "INSERT INTO produtos (nome, preco) VALUES (?,?)",
            [request.body.nome, request.body.preco],
            (error, resultado, field) => {
                conn.release();
                if (error) {
                    return response.status(500).send({ error: error });
                }

                response.status(201).send({
                    mensagem: "Produto inserido com sucesso",
                    id_produto: resultado.insertId,
                });
            }
        );
    });
});

// RETORNA OS DADOS DE UM PRODUTO
router.get("/:id_produto", (request, response, next) => {
    mysql.getConnection((error, conn) => {
        if (error) {
            return response.status(500).send({ error: error });
        }
        conn.query(
            "SELECT * FROM produtos WHERE id_produto = ?;",
            [request.params.id_produto],
            (error, resultado, fields) => {
                if (error) {
                    return response.status(500).send({ error: error });
                }
                return response.status(200).send({ response: resultado });
            }
        );
    });
});

// ALTERA UM PRODUTO
router.patch("/", (request, response, next) => {
    mysql.getConnection((error, conn) => {
        conn.query(
            `UPDATE produtos
                SET nome       = ?,
                    preco      = ?
              WHERE id_produto = ?`,
            [request.body.nome, request.body.preco, request.body.id_produto],
            (error, resultado, field) => {
                conn.release();
                if (error) {
                    return response.status(500).send({ error: error });
                }

                response.status(202).send({
                    mensagem: "Produto alterado com sucesso",
                });
            }
        );
    });
});

// EXCLUI UM PRODUTO
router.delete("/", (request, response, next) => {
    mysql.getConnection((error, conn) => {
        conn.query(
            `DELETE FROM produtos WHERE id_produto = ?`,
            [request.body.id_produto],
            (error, resultado, field) => {
                conn.release();
                if (error) {
                    return response.status(500).send({ error: error });
                }

                response.status(202).send({
                    mensagem: "Produto excluído com sucesso",
                });
            }
        );
    });
});

module.exports = router;
