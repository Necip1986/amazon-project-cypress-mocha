/// <reference types="cypress" />

import LandingPage from "../pages/LandingPage"
import LoginPage from "../pages/LoginPage";

describe('Amazon Login Function',()=>{

    var landingPage=new LandingPage();
    var loginPage=new LoginPage();
   
    before(function(){
        cy.fixture('basicData').then(
            function(data){
                this.data=data;
            }
        )    
    })

    beforeEach(function(){
        cy.visit(this.data.amazon_url)
        landingPage.getHelloMenu().trigger('mouseover').wait(2000)
        landingPage.getSignInLink().click();
    })

    it('Positif login test',function(){
        
        loginPage.getEmailTextBox().type(this.data.email)
        loginPage.getContinueButton().click().wait(1000)
        loginPage.getPasswordTextBox().type(this.data.password)
        loginPage.getSignInButton().click();
        landingPage.getHelloMenu().should('contain.text','Yunus')
    })

    it.only('Negatif login test',function(){
        
        loginPage.getEmailTextBox().type(this.data.invalidEmail)
        loginPage.getContinueButton().click().wait(1000)
        loginPage.getProblemMessage().should('be.visible')
        
    })
})