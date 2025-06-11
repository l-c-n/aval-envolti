
class CadastroPage {

    go() {

        cy.visit('/cadastrarusuarios')
    }

    form() {
        const nome = `Usuario Teste ${Date.now()}`;

        cy.get('[data-testid="nome"]').type(nome);
        cy.get('[data-testid="email"]').type(`teste${Date.now()}@email.com`);
        cy.get('[data-testid="password"]').type('teste123');
        cy.get('[data-testid="checkbox"]').check();
        cy.get('[data-testid="cadastrar"]').click();
    }

    textExpect() {
        cy.contains('Cadastro realizado com sucesso').should('be.visible');
    }

}


export default new CadastroPage()