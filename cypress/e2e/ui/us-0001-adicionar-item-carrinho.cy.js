/// <reference types="cypress" />

describe('[US-0001] Adicionar item ao carrinho', () => {

    beforeEach(() => {
        cy.visit('catalog.html');
    });
    

    it('Deve adicionar 4 produtos diferentes ao carrinho e validar', () => {
    
        cy.get('.btn-primary').eq(0).click();
        cy.get('.btn-primary').eq(1).click();
        cy.get('.btn-primary').eq(2).click();
        cy.get('.btn-primary').eq(3).click();
        cy.get('#cart-count').should('contain', 4)

});
});