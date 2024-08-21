import login from "../page_objects/login"
import logout from "../page_objects/logout"

describe('orange hrm tests', () => {
  beforeEach (() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    const ln = new login()
    ln.setUserName("Admin")
    ln.setPassWord("admin123")
    ln.clickSubmit()
    ln.verifyLogin()
  })

  afterEach (() => {
    const lt = new logout()
    lt.clickDropDown()
    lt.clickLogOut()
    lt.verifyLogOut()
  })

  it('search', () => {
    //add a candidate 
  })
})