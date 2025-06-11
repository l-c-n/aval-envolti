import cadastroProduto from '../../support/pages/cadastro_produto'

describe('Cadastro de Produto', function () {
  const user = {
    email: `admin_${Date.now()}@teste.com`,
    nome: `Administrador ${Date.now()}`

  }
  it('Deve cadastrar um administrador e em seguida cadastrar um produto com sucesso', function () {

    cadastroProduto.go()
    cadastroProduto.form(user)
    cadastroProduto.textExpect()
    cadastroProduto.acessoAdmin(user)
    cadastroProduto.preencherProduto()

  });
});
