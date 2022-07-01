/// <reference types="cypress" />
import ProductInfoPage from "../pages/ProductInfoPage";
import SearchResultPage from "../pages/SearchResultPage";
import LandingPage from "../pages/LandingPage";

const landingPage=new LandingPage();
const productInfoPage=new ProductInfoPage();
const searchResultPage=new SearchResultPage()
describe('Add to Cart Function',()=>{

    beforeEach(function(){
        cy.fixture('basicData').then(
            function(data){
                this.data=data;
            }
        )
    })

    it.only("Products Sub-total test", function(){
        cy.SearchProduct(this.data.amazon_url,this.data.productName)
        searchResultPage.getSearchedProductList().eq(0).click().wait(1000)

        productInfoPage.getProductTitle().then($productName=>{
            const product=$productName.text()
            cy.wrap(product).as('product1')
        })

        productInfoPage.getProductPrice().then($price=>{
            const product1Price=Number($price.text().substring(1).replace(',',''))
            cy.wrap(product1Price).as('product1Price')
        })
        //productInfoPage.getProductTitle().invoke('text').as('product1')
        


       productInfoPage.getAddToCartButton().click()
       productInfoPage.getSideSheet().click({force:true}).wait(2000)
       cy.get('#nav-search-submit-button').click({force:true})
      //cy.go("back").wait(1000)

       searchResultPage.getSearchedProductList().eq(1).click().wait(1000)
       productInfoPage.getProductTitle().then($productName=>{
        const productName=$productName.text()
        cy.wrap(productName).as('product2')
    })

    productInfoPage.getProductPrice().then($price=>{
        const product1Price=Number($price.text().substring(1).replace(',',''))
        cy.wrap(product1Price).as('product2Price')
    })

   // productInfoPage.getProductPrice().invoke('text').as('product2Price')
        
       productInfoPage.getAddToCartButton().click()

       productInfoPage.getGoCartButton().click()

       productInfoPage.getProductsAtTheCart().first().then($text=>{
        const productName=$text.text();
        cy.log(productName)
        cy.log(this.product2)
        cy.log(this.product1Price)
        cy.log(this.product2Price)
        expect(this.product2).to.contain(productName.substring(0,14))
       })

       
       productInfoPage.getProductsAtTheCart().eq(1).then($text=>{
        const name=$text.text();
        cy.log(name)
        cy.log(this.product1)
        expect(this.product1).to.contain(name.substring(0,14))
       })

       productInfoPage.getSubTitle().then($price=>{
        const subTotal=Number($price.text().substring(1).replace(',',''))
        const productsPrices=this.product1Price+this.product2Price
        cy.log(this.product1Price)
        cy.log(this.product2Price)
        cy.log(subTotal)
        cy.log(productsPrices)
        expect(productsPrices).to.equal(subTotal)

        //parseFloat(quantity)

       })
        
            
    })

})