const produtosController = {
  cadastrarProduto: (req, res) => {
    res.render("admin/cadastroProduto");
  },
  listaProduto: (req, res) => {
    res.render("admin/produtos");
  },
};

module.exports = produtosController;
