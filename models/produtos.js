const { uuid } = require("uuidv4");
let listaProdutos = [
  {
    id: uuid(),
    nome: "website",
    descricao:
      "Você não encontrará o mais recente filme de grande sucesso no Etsy, mas certamente encontrará peças de artesanato inovadoras feitas por pessoas em suas casas que você pode comprar para expressar seu geek / fã / artista interior. ",
    image:
      "https://hubify.com.br/wp-content/uploads/2017/08/escolher-o-layout-do-site-1080x540.png",
  },
];

function cadastrarProduto(nome, descricao, image) {
  const novoProduto = {
    id: uuid(),
    nome,
    descricao,
    image,
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
