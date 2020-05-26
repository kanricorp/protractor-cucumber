var homePage = function () {

    this.homeIcon = function() {
        return homeIcon = browser.findElement(by.css('.icon-home.ng-star-inserted'));
    };
}
module.exports = new homePage();