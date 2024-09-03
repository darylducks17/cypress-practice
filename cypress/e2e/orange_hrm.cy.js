import dashboard from "../page_objects/dashboard"
import login from "../page_objects/login"
import logout from "../page_objects/logout"
import search from "../page_objects/search"

describe('orange hrm tests', () => {
  //valid login credentials
  beforeEach (() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    const ln = new login()
    ln.setUserName("Admin")
    ln.setPassWord("admin123")
    ln.clickLogin()
    ln.verifyLogin()
  })

  afterEach (() => {
    const lt = new logout()
    lt.clickDropDown()
    lt.clickLogOut()
    lt.verifyLogOut()
  })

  it('verifying dashboard UI', () => {
    const dd = new dashboard()
    dd.verifyPageTitle()
    dd.verifyWidgetNumber()
    dd.verifyWidgetTitles()
  })

  it('searching for user info page', () => {
    const sh = new search()
    sh.useSearchBox("My Info")
    sh.clickSearchResult("My Info")
    sh.verifySearchResult("PIM")
  })

  it('searching for directory page', () => {
    const sh = new search()
    sh.useSearchBox("Directory")
    sh.clickSearchResult("Directory")
    sh.verifySearchResult("Directory")
  })

})
