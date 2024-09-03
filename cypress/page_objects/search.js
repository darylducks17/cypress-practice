class search {
    inputSearchBox = "input[placeholder='Search']"
    btnSearchResult = ".oxd-main-menu-item.active"

    useSearchBox (input) {
        cy.get(this.inputSearchBox).type(input)
    }

    clickSearchResult () {
        cy.get(this.btnSearchResult).click()
    }

    

    

   
} 
export default search