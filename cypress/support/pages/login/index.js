
class LoginPage {
    go() {
        cy.visit('/login')
    }

    form() {
        cy.get('[data-testid="email"]').type('eu_sou@qa.com')
        cy.get('[data-testid="senha"]').type('pwd123')
        cy.get('[data-testid="entrar"]').click()
    }

    textExpect() {
        cy.url().should('include', '/home');
        cy.contains('Bem Vindo').should('be.visible');
    }
}

export default new LoginPage()