/// <reference types="cypress" />

import LandingPage from "../pages/LandingPage"

var landingPage=new LandingPage();

describe('Amazon Login Function',()=>{   
    
    beforeEach(function(){
        cy.fixture('basicData').then(
            function(data){
                this.data=data;
            }
        )    
    })

    it('Create and Delete shopping List Test',function(){
        cy.visit(this.data.amazon_url)
        cy.Sign_In(this.data.email,this.data.password).wait(2000)
        landingPage.getHelloMenu().trigger('mouseover').wait(1000)
        landingPage.getCreatListLink().click()
        cy.title().should('contain',"Your List")
    })

})