describe('orange hrm tests', () => {
  beforeEach (() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.fixture("orange-hrm").then((data)=>{
      const ln = new login_objects()
      ln.setUserName(data.username)
      ln.setPassWord(data.password)
      ln.clickSubmit()
      ln.verifyLogin()
    })
    
  })

  afterEach (() => {
    logout
  })

  it('search', () => {
    
  })
})