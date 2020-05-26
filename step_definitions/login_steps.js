//cucumber keywords
const {Given, When, Then} = require("cucumber");

//protractor object ExpectedConditions
var EC = require("protractor").ExpectedConditions;

//chai library for assertions
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

var loginPage = require('../pages/login_page');
var homePage = require('../pages/home_page');

/*
 Given('user is on the login page', async function () {
    await browser.get('https://evoltistarifador.cidsfrcutn.tech/#/login');
    return browser.wait(EC.elementToBeClickable($('.btn.btn-block')),5000);
  });
*/  

  Given('user is on the login page', function () {
    browser.get('https://evoltistarifador.cidsfrcutn.tech/#/login');
    return browser.wait(EC.elementToBeClickable($('.btn.btn-block')),10000);
  });

  When('user enter valid credentials', function () {
    loginPage.txtUser().click();
    loginPage.txtUser().sendKeys('marianafagandini64@gmail.com');
    loginPage.txtPassword().click();
    loginPage.txtPassword().sendKeys('Mariana123.');
    return loginPage.btnLogin().click();
  });

/*
  When('user enter valid credentials', async function () {
    await loginPage.txtUser().click();
    await loginPage.txtUser().sendKeys('marianafagandini64@gmail.com');
    await loginPage.txtPassword().click();
    await loginPage.txtPassword().sendKeys('Mariana123.');
  });
*/

  When('user clicks on login button', function () {
    return loginPage.btnLogin().click();
  });

  Then('user is redirected to the home page', function () {
    return browser.wait(EC.visibilityOf($('.icon-home.ng-star-inserted')),5000);
  });