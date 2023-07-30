/// <reference types="Cypress" />
describe('Revise project',function()
{
it('registration', function ()
 {
cy.visit('https://automationteststore.com')
cy.get('#customer_menu_top > li > a').click()
cy.get('#accountFrm > fieldset > .btn').click()
cy.get('#AccountFrm_firstname').type("aa")
cy.get('#AccountFrm_lastname').type("bb")
cy.get('#AccountFrm_email').type("aab22scc@gmail.com")
cy.get('#AccountFrm_address_1').type("montreal")
cy.get('#AccountFrm_city').type("mon")
cy.get('#AccountFrm_zone_id').select("Powys")
cy.get('#AccountFrm_postcode').type("H3N 1S4")
cy.get('#AccountFrm_country_id').select("United Kingdom")
cy.get('#AccountFrm_loginname').type("aaaaa22")
cy.get('#AccountFrm_password').type("aa22")   
cy.get('#AccountFrm_confirm').type("aa22")
cy.get('#AccountFrm_agree').check()
cy.get('.col-md-2 > .btn').click()

cy.get('.side_account_list > :nth-child(10) > a').click()

 })
})