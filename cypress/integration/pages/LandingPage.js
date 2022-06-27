class LandingPage{
    getHelloMenu(){ //we will get object
        return cy.get('#nav-link-accountList > .nav-line-2 > .nav-icon')

    }
}

export default LandingPage; //we need to make this class public