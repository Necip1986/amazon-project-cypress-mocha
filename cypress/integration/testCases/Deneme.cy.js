/// <reference types="cypress" />

import LandingPage from "../pages/LandingPage";

describe('deneme',function(){

    before(function(){
        cy.fixture('basicData').then(
            function(data){
                this.data=data;
            }
        )
    })
    it("deneme test",function(){
        
        const landingPage=new LandingPage();
        cy.visit(this.data.amazon_url)
        landingPage.getHelloMenu().trigger('mouseover').wait(3000)
    })
    
})