const depoimentos = require("../models/depoimentos");

const indexController = {
  exibirHome: (req, res) => {
    res.render("index", { title: "Sua empresa vai ser incrível" });
  },

  exibirDepoimentos: (req, res) => {
    res.render("depoimentos", { depoimentos });
  },

  exibirContato: (req, res) => {
    res.render("contato");
  },

  exibirBlog: (req, res) => {
    res.render("blog");
  },

  exibirManutencao: (req, res) => {
    res.render("manutencao");
  },
};

module.exports = indexController;
