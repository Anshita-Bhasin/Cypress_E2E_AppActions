describe('example to-do app', () => {
    beforeEach(() => {
        cy.visit('https://ecommerce-playground.lambdatest.io/')
    })

    it('Login and verify', () => {

        cy.get('span:contains("My account")').eq(1).click()
        cy.get('[id="input-email"]').type("lambdatest.Cypress@disposable.com");
        cy.get('[id="input-password"]').type("Cypress123!!");
        cy.get('input[type="submit"]').click();
        cy.get('h2:contains("My Account")').should('be.visible')

    })


})