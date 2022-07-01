import LandingPage from "../pages/LandingPage";

describe('All Menu function',()=>{
    const landingPage=new LandingPage();
    beforeEach(function(){
        cy.fixture('basicData').then(
            function(data) {{
                this.data=data;
            }
        })
    })

    it("Smart Home Department's subcategories",function(){
        cy.visit(this.data.amazon_url)
        landingPage.getAllMenu().click({force:true}).wait(2000)
        landingPage.getSmartHome().click({force:true})
        landingPage.getSubCategories().should('have.length',16)

    })
})