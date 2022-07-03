/// <reference types="cypress" />

import CreateShoppingListPage from "../pages/CreateShoppingListPage";
import LandingPage from "../pages/LandingPage"

var landingPage=new LandingPage();
const createShoppingListPage=new CreateShoppingListPage();

describe('Amazon Login Function',()=>{   
    
    beforeEach(function(){
        cy.fixture('basicData').then(
            function(data){
                this.data=data;
            }
        )    
    })

    it.skip('Create and Delete shopping List Test',function(){
        cy.visit(this.data.amazon_url)
        cy.Sign_In(this.data.email,this.data.password).wait(2000)
        landingPage.getHelloMenu().trigger('mouseover').wait(1000)
        landingPage.getCreatListLink().click()
        cy.title().should('contain',"Your List")

        createShoppingListPage.getCreateListButton().click({force:true})
        .wait(1000)
        createShoppingListPage.getShoppingListNameBar().clear().wait(1000)
        .type(this.data.shoppingListName)
        createShoppingListPage.getCreateListSubmitButton().click({force:true})
        .wait(1000)
        createShoppingListPage.getCreatedListName().invoke('text').then(el=>{
            expect(el).to.equal(this.data.shoppingListName)
        })

        createShoppingListPage.getMoreOption().trigger('mouseover')
        createShoppingListPage.getManageList().click({force:true})
        createShoppingListPage.getDeleteShoppingList().click({force:true})
        .wait(1000)
        createShoppingListPage.getDeleteListConfirm().click({force:true})
        createShoppingListPage.getConfirmDeletedHeaderSign().should('be.visible')

    })

    it.only('Add and remove product from Shopping List Test',function(){
        cy.visit(this.data.amazon_url)
        cy.Sign_In(this.data.email,this.data.password).wait(2000)
        landingPage.getHelloMenu().trigger('mouseover').wait(1000)
        landingPage.getCreatListLink().click()
        cy.title().should('contain',"Your List")

        createShoppingListPage.getCreateListButton().click({force:true})
        .wait(1000)
        createShoppingListPage.getShoppingListNameBar().clear().wait(1000)
        .type(this.data.shoppingListName)
        createShoppingListPage.getCreateListSubmitButton().click({force:true})
        .wait(1000)
        createShoppingListPage.getCreatedListName().invoke('text').then(el=>{
            expect(el).to.equal(this.data.shoppingListName)
        })

})