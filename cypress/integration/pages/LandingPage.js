class LandingPage {
    getLogo() {
        return cy.get('#nav-logo-sprites')
    }
    getHelloMenu() { 
        return cy.get('#nav-link-accountList')

    }

    getSignInLink(){
        return cy.contains('Sign in',{force:true})
    }
}

export default LandingPage;