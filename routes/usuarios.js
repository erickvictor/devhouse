const express = require("express");

const usuarioController = require("../controllers/usuarios");

const routes = express.Router();

routes.get("/login", usuarioController.exibirLogin);
routes.get("/cadastro", usuarioController.exibirCadastro);
routes.post("/cadastro-usuario", usuarioController.salvarUsuario);
routes.post("/loginUsuario", usuarioController.loginUsuario);

module.exports = routes;
