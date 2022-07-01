/// <reference types="cypress" />
import SearchResultPage from "../pages/SearchResultPage";

const searchResultPage=new SearchResultPage();
describe('Sort by Brand',()=>{
    beforeEach(function(){
        cy.fixture('basicData').then(
            function(data){
                this.data=data;
            }
        )
    })

    it('Sort by brand sony',function(){
        cy.SearchProduct(this.data.amazon_url,this.data.productName)
        searchResultPage.getSonyFromSortByBrand().click()

        searchResultPage.getSearchedProductList().then((item) => { 
           const itemCount = Cypress.$(item).length;
           cy.log(itemCount)
           for(var i=0; i<itemCount; i++){
            searchResultPage.getSearchedProductList().eq(i).should(productText => expect(productText.text().toLowerCase()).to.contain('sony'));
               //searchResultPage.getSearchedProductList().eq(i).should('contain.text'.toLowerCase,"Sony")
               
           }
       })

    })
})