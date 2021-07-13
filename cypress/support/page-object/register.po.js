/// <reference types="cypress" />

export class RegisterPage {
    static visit = () => cy.visit("https://demoqa.com/register")
  
     static pageLoaded = () => cy.get('.main-header').should("contain", "Register")

     static firstNameInput = () => cy.get("#firstname")
     static lastNameInput = () => cy.get("#lastname")
     static userNameInput = () => cy.get("#userName")
     static passwordInput = () => cy.get("#password")
     static captchaCheckBox = () => cy.get("#recaptcha-anchor")
     static registerBtn = () => cy.get("#register")
     static gotoLoginBtn = () => cy.get("#gotologin")
     
  
  }