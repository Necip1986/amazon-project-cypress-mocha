/// <reference types="cypress" />

import LandingPage from "../pages/LandingPage";

describe('Accesing Amazon Website',()=>{
    before(function(){
        cy.fixture('basicData').then(
            function(data){
                this.data=data;
            }
        )

    })

    it('verified with title and logo',function(){
        const landingPage=new LandingPage();

        cy.visit(this.data.amazon_url)
        cy.title().should('contain','Amazon')
        landingPage.getLogo().should('be.visible')

    })
})