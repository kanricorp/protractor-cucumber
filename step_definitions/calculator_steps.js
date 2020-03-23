//cucumber keywords
const {Given, When, Then} = require("cucumber");

//protractor object ExpectedConditions
var EC = require("protractor").ExpectedConditions;

//chai library for assertions
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

var calculatorPage = require('../pages/calculator_page');

  Given('I view the homepage', function () {
    browser.get("http://juliemr.github.io/protractor-demo/");
    return browser.wait(EC.elementToBeClickable($('.btn')),5000);
  });

  Given('I enter as {string} number the value {int}', function (string, int) {
    switch (string) {
        case "first":
          return calculatorPage.getFirstNumber().sendKeys(int);
        case "second":
          return calculatorPage.getSecondNumber().sendKeys(int);
    }
  });

  When('I click on the button {string}', function (string) {
    switch(string) {
      case "Go":
        return calculatorPage.getBtnGo().click();
    }
  });

  Then('I see the result is {int}', function (int) {
    return calculatorPage.getResult().getText().then(function(text) {
      expect(text).to.be.equal(int.toString());
    });
  });

