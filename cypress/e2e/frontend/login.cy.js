
import loginPage from '../../support/pages/login'

describe('Login de usuário', function () {
  const initUser = {
    email: 'eu_sou@qa.com',
    senha: 'pwd123'

  }
  it('Deve permitir login com usuário válido', function () {

    loginPage.go()
    loginPage.form(initUser)
    loginPage.textExpect()

  })
})
