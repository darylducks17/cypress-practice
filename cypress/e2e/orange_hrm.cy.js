import dashboard from "../page_objects/dashboard"
import login from "../page_objects/login"
import logout from "../page_objects/logout"

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

  it('dashboard', () => {
    const dd = new dashboard()
    dd.verifyPageTitle()
    dd.verifyWidgetNumber()
    dd.verifyWidgetTitles()
  })

  it('search', () => {
    cy.log('this is a test')
  })
})
