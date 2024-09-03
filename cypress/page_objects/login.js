class login {
    txtUserName = "input[placeholder='Username']"
    txtPassWord = "input[placeholder='Password']"
    btnLogin = "button[type='submit']"
    lblMsg = ".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module"
    lblInvalidMsg = ".oxd-alert-content > .oxd-text"

    setUserName(username) {
        cy.get(this.txtUserName).type(username)
    }
    setPassWord(password) {
        cy.get(this.txtPassWord).type(password)
    }
    clickLogin() {
        cy.get(this.btnLogin).click()
    }
    verifyLogin(){
        cy.get(this.lblMsg).should("have.text", "Dashboard")
    }
    verifyInvalidLogin(){
        cy.get(this.lblInvalidMsg).should("have.text", "Invalid credentials")
    }
}
export default login