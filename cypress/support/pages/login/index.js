
class LoginPage {
    go() {
        cy.visit('/login')
    }

    form(initUser) {
        cy.get('[data-testid="email"]').type(initUser.email)
        cy.get('[data-testid="senha"]').type(initUser.senha)
        cy.get('[data-testid="entrar"]').click()
    }

    textExpect() {
        cy.url().should('include', '/home');
        cy.contains('Bem Vindo').should('be.visible');
    }
}

export default new LoginPage()