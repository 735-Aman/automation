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
 cy.get('.block_7 > .nav > .dropdown > .dropdown-toggle').click()
 cy.get('.dropdown-toggle > .fa').click()
 cy.get('#cart_checkout1').click()
 cy.get('#checkout_btn').click()

  })
})
