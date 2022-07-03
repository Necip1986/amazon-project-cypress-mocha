Cypress.on('uncaught:exception', (err, runnable) => { //with this we can handle uncaught:exception in cypress
    return false;                                      //commands.js file'a alinabilir
});


import LandingPage from "../integration/pages/LandingPage";
import LoginPage from "../integration/pages/LoginPage";

var landingPage=new LandingPage();
var loginPage=new LoginPage();

Cypress.Commands.add('Sign_In', (email, password) => {
    landingPage.getHelloMenu().trigger('mouseover').wait(1000)
    landingPage.getSignInLink().click();
    loginPage.getEmailTextBox().type(email)
    loginPage.getContinueButton().click().wait(1000)
    loginPage.getPasswordTextBox().type(password)
    loginPage.getSignInButton().click();


})

Cypress.Commands.add('SearchProduct', (url, product) => {
    cy.visit(url)
    landingPage.getSearchBox().click().wait(3000).type(product).wait(1000);
    landingPage.getSearchButton().click({ force: true })
})