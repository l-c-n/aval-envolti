import cadastroPage from '../../support/pages/cadastro_usuario'

describe('Cadastro de Usuário', function () {


  it('Deve cadastrar um usuário com sucesso', function () {

    cadastroPage.go()
    cadastroPage.form()
    cadastroPage.textExpect()

  })
})
