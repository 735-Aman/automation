// <reference types="Cypress" />
describe('Revise project',function()
{
it('registration', function ()
 {
cy.visit("https://automationteststore.com")
cy.get('#customer_menu_top > li > a').click()
cy.get('#loginFrm_loginname').type("aaaaa22")
cy.get('#loginFrm_password').type("aa22")
cy.get('#loginFrm > fieldset > .btn').click()
cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=36"]').click()
cy.get(':nth-child(3) > :nth-child(1) > img').click()
cy.get(':nth-child(2) > .thumbnail > :nth-child(1) > img').click()
 cy.get('.cart > .fa').click()
 cy.get('#cart_quantity58').type("6")
 cy.get('#cart_update').click()

 })
})