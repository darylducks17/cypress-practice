class logout {
    btnDropDown = ".oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon"
    btnLogOut = "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > header:nth-child(2) > div:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1)"
    lblLogin = ".oxd-text.oxd-text--h5.orangehrm-login-title"
    
    clickDropDown() {
        cy.get(this.btnDropDown).click()
    }
    clickLogOut() {
        cy.get(this.btnLogOut).click()
    }
    verifyLogOut(){
        cy.wait(2000)
        cy.title().should("eq", "OrangeHRM")
    }

}
export default logout