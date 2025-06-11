
class CadastroProduto {

 
    go() {
        cy.visit('/cadastrarusuarios');
    }

    form(user) {


        cy.get('[data-testid="nome"]').type(user.nome);
        cy.get('[data-testid="email"]').type(user.email);
        cy.get('[data-testid="password"]').type('admin123');
        cy.get('[data-testid="checkbox"]').check();
        cy.get('[data-testid="cadastrar"]').click();
    }

    textExpect() {
        cy.contains('Cadastro realizado com sucesso').should('be.visible');
    }

    acessoAdmin(user) {
        cy.visit('/login');
        cy.get('[data-testid="email"]').type(user.email);
        cy.get('[data-testid="senha"]').type('admin123');
        cy.get('[data-testid="entrar"]').click();

        cy.get('[data-testid="cadastrar-produtos"]').click();

    }
    preencherProduto() {
        cy.get('[data-testid="nome"]').should('be.visible').type(`Administrador ${Date.now()}`);
        cy.get('[data-testid="preco"]').type('150');
        cy.get('[data-testid="descricao"]').type('Produto criado automaticamente');
        cy.get('[data-testid="quantity"]').type('20');

        cy.get('[data-testid="imagem"]').attachFile('imagem-exemplo.jpg');
        cy.get('[data-testid="cadastarProdutos"]').click();
        cy.contains('Lista dos Produtos').should('be.visible');
    }


}

export default new CadastroProduto()