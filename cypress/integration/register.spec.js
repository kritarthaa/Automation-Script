/// <reference types="cypress"/>

import { RegisterPage } from "../support/page-object/register.po";

describe("DemoQA Register", () => {
  beforeEach(() => {
    RegisterPage.visit()
  })

  it('should have page loaded', () => {
    RegisterPage.pageLoaded()
  })

  it('should register new user', () => {
      RegisterPage.firstNameInput().type("Kritarth")
      RegisterPage.lastNameInput().type("Acharya")
      RegisterPage.userNameInput().type("kacharya")
      RegisterPage.passwordInput().type("P@ssword1")
      RegisterPage.captchaCheckBox().check()
      RegisterPage.registerBtn().click()

  })

})
