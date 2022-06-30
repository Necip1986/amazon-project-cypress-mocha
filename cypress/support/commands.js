Cypress.on('uncaught:exception', (err, runnable) => { //with this we can handle uncaught:exception in cypress
    return false;                                      //commands.js file'a alinabilir
  });


import LandingPage from "../integration/pages/LandingPage";

const landingPage=new LandingPage();

Cypress.Commands.add('login',(email,password)=>{
    cy.visit('')
    cy.get('.login').click();
    cy.get('#email').type(email)
    cy.get('#passwd').type(password)
    cy.get('#SubmitLogin > span').click();

})

Cypress.Commands.add('SearchProduct',(url,product)=>{
    cy.visit(url)
    landingPage.getSearchBox().click().wait(3000).type(product).wait(1000);
    landingPage.getSearchButton().click({force:true})
})