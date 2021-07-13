/// <reference types="cypress" />

export class LoginPage {
    static visit = () => cy.visit("https://demoqa.com/login")
  
     static pageLoaded = () => cy.get('.main-header').should("contain", "Login")
     static successLogin = () => cy.get('.main-header').should("contain", "Profile")
     static invalidLogin = () => cy.get('p').contains("Invalid username or password!")
     static userNameInput = () => cy.get("#userName")
     static passwordInput = () => cy.get("#password")
     static loginBtn = () => cy.get("#login")
     
  
  }