const express = require("express");
const path = require("path");

const indexController = require("../controllers");

const routes = express.Router();

routes.get("/", indexController.exibirHome);

routes.get("/home", indexController.exibirHome);

routes.get("/depoimentos", indexController.exibirDepoimentos);

routes.get("/contato", indexController.exibirContato);

routes.get("/blog", indexController.exibirBlog);

routes.get("/manutencao", indexController.exibirManutencao);

module.exports = routes;
