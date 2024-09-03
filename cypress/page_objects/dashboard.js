class dashboard {
    lblDashBoard = ".oxd-main-menu-item.active"
    eleWidget = ".oxd-sheet"
    lblWidget = ".orangehrm-dashboard-widget-name > .oxd-text"
    

    verifyPageTitle() {
        cy.get(this.lblDashBoard).should("have.text", "Dashboard")
    }
    
    verifyWidgetNumber() {
        cy.get(this.eleWidget).should('have.length', 7)
    }

    verifyWidgetTitles() {
        cy.fixture("title").then((data) => {
            data.forEach((titles) => {
              cy.get(this.lblWidget).contains(titles.expected)
            })
        })
    }
    

   
} 
export default dashboard