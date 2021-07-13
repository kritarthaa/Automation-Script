/// <reference types="cypress"/>

import { AmazonPage } from "../support/page-object/amazon.po";

describe("Amazon Page", () => {
  beforeEach(() => {
    AmazonPage.visit()
  })

  it('should have page loaded', () => {
    AmazonPage.pageLoaded()
  })

  it('should select random options from the dropdown', () => {

      AmazonPage.dropDownOptions().then(($options) => {
      const randomOption = Math.floor(Math.random() * $options.length);
      AmazonPage.dropDown().click({force: true})
      AmazonPage.dropDownList().select(`${$options[randomOption].innerText}`, {force: true});
    })
  })

})
