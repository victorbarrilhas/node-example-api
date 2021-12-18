# node-example-api

Teste de primeiro pull request.

## Como rodar o banco de dados

- Instalar o [Docker](https://docs.docker.com/get-docker/);

- Baixar a imagem do MySql;

```shell
docker pull mysql
``` 
- Rodar o container

```shell
docker run -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=root -d mysql
```
