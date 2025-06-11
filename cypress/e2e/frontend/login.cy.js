
import loginPage from '../../support/pages/login'

describe('Login de usuário', function() {

  it('Deve permitir login com usuário válido', function () {

    loginPage.go()
    loginPage.form()
    loginPage.textExpect()

  })
})
