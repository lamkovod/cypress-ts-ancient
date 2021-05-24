describe('Cypress Actions Page', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/actions');
    });
    it('email input can be filled', () => {
        cy.get('.action-email').type('fake@email.com').should('have.value', 'fake@email.com');
    });
});
