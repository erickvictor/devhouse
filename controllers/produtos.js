const produtoModel = require("../models/produtos");

const produtosController = {
  cadastrarProduto: (req, res) => {
    res.render("admin/cadastroProduto");
  },
  listaProduto: (req, res) => {
    res.render("admin/produtos", {
      produtos: produtoModel.listaProdutos,
    });
    console.log(produtoModel.listaProdutos);
  },
  salvarProduto: (req, res) => {
    console.log(req.body);
    const { nome, descricao, imagem } = req.body;
    produtoModel.cadastrarProduto(nome, descricao, imagem);

    console.log(produtoModel.listaDeProdutos);

    res.send("Cadastro concluido");
  },
};

module.exports = produtosController;
