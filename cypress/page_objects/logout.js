class logout {
    btnDropDown = ".oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon"
    btnLogOut = ":nth-last-child(1)> .oxd-userdropdown-link"
    lblLogin = ".oxd-text.oxd-text--h5.orangehrm-login-title"
    
    clickDropDown() {
        cy.get(this.btnDropDown).click()
    }
    clickLogOut() {
        //used wait as cypress was too fast for the website to process
        cy.wait(3000)
        cy.get(this.btnLogOut).should('be.visible').click({force:true})
    }
    verifyLogOut(){
        cy.title().should("eq", "OrangeHRM")
    }
}
export default logout