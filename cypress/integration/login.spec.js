/// <reference types="cypress"/>

import { LoginPage } from "../support/page-object/login.po";

describe("DemoQA Login", () => {
  beforeEach(() => {
    LoginPage.visit()
  })

  it('should have page loaded', () => {
    LoginPage.pageLoaded()
  })

  it('should show error when Login with invalid username', () => {
    LoginPage.userNameInput().type("xyz")
    LoginPage.passwordInput().type("P@ssword1")
    LoginPage.loginBtn().click()
    LoginPage.invalidLogin()
    

})
it('should show error when Login with invalid password', () => {
  LoginPage.userNameInput().type("kacharya")
  LoginPage.passwordInput().type("password")
  LoginPage.loginBtn().click()
  LoginPage.invalidLogin()
  

})

  it('should successfully Login with valid credential', () => {
      LoginPage.userNameInput().type("kacharya")
      LoginPage.passwordInput().type("P@ssword1")
      LoginPage.loginBtn().click()
      LoginPage.successLogin()

  })

})
