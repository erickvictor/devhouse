const usuarioModel = require("../models/usuarios");

const usuarioController = {
  exibirLogin(req, res) {
    return res.render("login");
  },
  exibirCadastro(req, res) {
    return res.render("cadastro");
  },
  salvarUsuario(req, res) {
    const { nome, email, senha } = req.body;
    usuarioModel.cadastrarUsuario(nome, email, senha);
    return res.redirect("/login");
  },
  loginUsuario(req, res) {
    const { email, senha } = req.body;
    const validaUsuario = usuarioModel.buscarUsuarioPorEmail(email);
    if (!validaUsuario || validaUsuario.senha != senha) {
      res.render("login", { error: "Usuario ou senha não existe" });
    }

    return res.redirect("/depoimentos");
  },
};

module.exports = usuarioController;
