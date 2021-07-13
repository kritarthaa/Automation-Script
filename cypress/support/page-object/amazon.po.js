/// <reference types="cypress" />

export class AmazonPage {
    static visit = () => cy.visit("https://www.amazon.com/")
     static pageLoaded = () => cy.get("#nav-logo-sprites")
     static dropDown = () => cy.get("#nav-search-dropdown-card")
     static dropDownList = () => cy.get("#searchDropdownBox")
     static dropDownOptions = () => this.dropDown().get("option")
     
    
}