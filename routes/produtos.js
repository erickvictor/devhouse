const express = require("express");

const produtosController = require("../controllers/produtos");

const upload = require("../middlewares/uploads");
const routes = express.Router();

routes.get("/admin/cadastrar-produto", produtosController.cadastrarProduto);

routes.post(
  "/salvar-produto",
  upload.single("imagem"),
  produtosController.salvarProduto
);

routes.get("/admin/produtos", produtosController.listaProduto);

module.exports = routes;
