class search {
    inputSearchBox = "input[placeholder='Search']"
    btnSearchResult = ".oxd-main-menu-item"
    lblSearchResult = ".oxd-topbar-header-title"

    useSearchBox (input) {
        cy.get(this.inputSearchBox).type(input)
    }

    clickSearchResult (input) {
        cy.get(this.btnSearchResult).should('have.text', input).click()
    }

    verifySearchResult (result) {
        cy.get(this.lblSearchResult).should('have.text', result)
    }
} 
export default search