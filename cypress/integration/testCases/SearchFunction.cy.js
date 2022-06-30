import SearchResultPage from "../pages/SearchResultPage";

Cypress.on('uncaught:exception', (err, runnable) => { //with this we can handle uncaught:exception in cypress
    return false;
  });


  const searchResultPage=new SearchResultPage();

describe('Search Function',()=>{
    beforeEach(function(){
        cy.fixture('basicData').then(
            function(data){
                this.data=data;
            }
        )
    })
    //var itemCount=0;
    it("Search Function Test",function(){
        cy.SearchProduct(this.data.amazon_url,this.data.productName)

        //https://stackoverflow.com/questions/46850694/in-cypress-how-to-count-a-selection-of-items-and-get-the-length
        searchResultPage.getSearchedProductList().eq(0).should('contain.text',this.data.productName) //assert first element contains text

        //itemCount=15; 
        searchResultPage.getSearchedProductList().then((item) => { 
             const itemCount = Cypress.$(item).length;
            cy.log(itemCount)
            for(var i=0; i<itemCount; i++){
                searchResultPage.getSearchedProductList().eq(i).should('contain.text',this.data.productName)
                
            }
        })

        //cy.log(itemCount)


    })
    
})