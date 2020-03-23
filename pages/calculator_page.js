var calculatorPage = function() {
    
    this.getFirstNumber = function() {
        return firstNumber = browser.findElement(by.model('first'));
    };

    this.getSecondNumber = function() {
        return secondNumber = browser.findElement(by.model('second'));
    };
    this.getBtnGo = function() {
        return btnGo = browser.findElement(by.id('gobutton'));
    };

    this.getResult = function() {
        return result = browser.findElement(by.css('.form-inline.ng-valid.ng-submitted.ng-dirty .ng-binding'));
    };
};
module.exports = new calculatorPage();