const express = require("express");

const produtosController = require("../controllers/produtos");

const routes = express.Router();

routes.get("/admin/cadastrar-produto", produtosController.cadastrarProduto);

routes.get("/admin/produtos", produtosController.listaProduto);

module.exports = routes;
