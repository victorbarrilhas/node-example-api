CREATE TABLE `produtos` (
  `id_produto` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `preco` float NOT NULL,
  PRIMARY KEY (`id_produto`)
) ENGINE = InnoDB AUTO_INCREMENT = 23 DEFAULT CHARSET = utf8mb3;
CREATE TABLE `pedidos` (
  `id_pedido` int NOT NULL AUTO_INCREMENT,
  `id_produto` int NOT NULL,
  `quantidade` smallint NOT NULL,
  PRIMARY KEY (`id_pedido`),
  KEY `fk_pedidos_produtos_idx` (`id_produto`),
  CONSTRAINT `fk_pedidos_produtos` FOREIGN KEY (`id_produto`) REFERENCES `produtos` (`id_produto`)
) ENGINE = InnoDB AUTO_INCREMENT = 4 DEFAULT CHARSET = utf8mb3;
ALTER TABLE produtos
ADD COLUMN imagem_produto VARCHAR(500);