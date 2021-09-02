const { v4: generateId } = require("uuid");
let listaProdutos = [
  {
    id: generateId(),
    nome: "Site",
    descricao: "Seu site incrivel",
    imagem:
      "https://cdn.w600.comps.canstockphoto.com.br/loja-site-web-produto-conceito-bot%C3%A3o-vetor-cliparte_csp52582154.jpg",
  },
  {
    id: generateId(),
    nome: "Plataforma",
    descricao: "Seu site incrivel",
    imagem:
      "https://cdn.w600.comps.canstockphoto.com.br/loja-site-web-produto-conceito-bot%C3%A3o-vetor-cliparte_csp52582154.jpg",
  },
];

function cadastrarProduto(nome, descricao, imagem) {
  const novoProduto = {
    id: generateId(),
    nome,
    descricao,
    imagem,
  };
  return listaProdutos.push(novoProduto);
}

function deletarProduto(id) {
  const novaListaProdutos = listaProdutos.filter((produto) => produto.id != id);

  if (novaListaProdutos.length >= listaProdutos.length) return false;

  listaProdutos = novaListaProdutos;

  return true;
}

module.exports = { listaProdutos, cadastrarProduto, deletarProduto };
