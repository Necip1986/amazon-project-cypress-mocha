/// <reference types="cypress" />
import LandingPage from "../pages/LandingPage"

describe('Bottom Links Function', () => {
    const landingPage = new LandingPage()

    beforeEach(function () {
        cy.fixture('basicData').then(
            function (data) {
                this.data = data;
            }
        )

    })

    it.only('First Way Testing Second Column Links Function', function () {
        cy.visit(this.data.amazon_url)
        cy.wait(1000)

        landingPage.getButtomLinksTableElements().first().scrollIntoView({force:true})
        cy.wait(3000)

        landingPage.getAmazonAdvertisingLink().then($text=>{
            const linkText=$text.text().trim().substring(0,6)
            landingPage.getAmazonAdvertisingLink().click({force:true})
            cy.title().should('contain',linkText)
        })

        cy.go('back')
        landingPage.getButtomLinksTableElements().first().scrollIntoView({force:true})
        cy.wait(3000)

        landingPage.getAmazonBusinessLink().then($text=>{
            const linkText=$text.text().trim().substring(0,6)
            landingPage.getAmazonBusinessLink().click({force:true})
            cy.title().should('contain',linkText)
        })

        cy.go('back')
        landingPage.getButtomLinksTableElements().first().scrollIntoView({force:true})
        cy.wait(3000)

        landingPage.getAmazonBoxOfficeMojoLink().then($text=>{
            const linkText=$text.text().trim().substring(0,3)
            landingPage.getAmazonBoxOfficeMojoLink().click({force:true})
            cy.title().should('contain',linkText)
        })

        cy.go('back')
        landingPage.getButtomLinksTableElements().first().scrollIntoView({force:true})
        cy.wait(3000)

        landingPage.getKindleDirectPublishingLink().then($text=>{
            const linkText=$text.text().trim().substring(0,6)
            landingPage.getKindleDirectPublishingLink().click({force:true})
            cy.title().should('contain',linkText)
        })

        cy.go('back')
        landingPage.getButtomLinksTableElements().first().scrollIntoView({force:true})
        cy.wait(3000)

/* pup up message problem
        landingPage.getEeroLink().then($text=>{
            const linkText=$text.text().trim().substring(0,4)
            landingPage.getEeroLink().click({force:true})
            cy.url().should('contain',linkText)
        })
       */ 
    })

    it('Testing second column links', function () {
        cy.visit(this.data.amazon_url)
        landingPage.getButtomLinksTableElements().then($buttomLinks => {
            const index = Cypress.$($buttomLinks).length;
            for (let i = 0; i < index; i++) {


                landingPage.getButtomLinksTableElements().eq(i).then($text => {
                    const linkText = $text.text();
                    cy.wrap(linkText).as('linkText')
                })

                landingPage.getButtomLinksTableElements().eq(i).click({ force: true }).then(verify => {
                    cy.log(this.linkText)
                    cy.title().should('contain', this.linkText.substring(0, 3))

                })

                if (i === 1) {
                    break
                }


                cy.go('back', { force: true })




            }
        })

    })

    it('deneme', function () {
        cy.visit(this.data.amazon_url)
        cy.wait(1000)

        //cy.get('table').find('tr').eq(ROW INDEX).find('td').eq(COLUMN INDEX).find('.delete-item').click()
        
        landingPage.getButtomLinksTableElements().first().scrollIntoView({force:true})
        cy.wait(3000)
        cy.get('tbody tr').then($rowNum => {
            const index = Cypress.$($rowNum).length
            cy.log(index)
            for (let i = 0; i < index; i += 2) {
                cy.get('tbody tr').eq(i).find('td').eq(2).find('a').then($text => {
                    cy.log($text.text())
                    const linkText = $text.text().substring(0, 6);
                    cy.get('tbody tr').eq(i).find('td').eq(2).find('a').click({ force: true })
                    cy.title().should('contain', linkText)
                    cy.wait(2000)
                    
                })
                cy.go('back', { force: true }).wait(2000)
                landingPage.getButtomLinksTableElements().first().scrollIntoView().wait(3000)
                
            }

        })
    })
})