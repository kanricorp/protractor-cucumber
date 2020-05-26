var loginPage = function() {
    
    this.txtUser = function() {
        return txtUser = browser.findElement(by.name('email'));
    };

    this.txtPassword = function() {
        return txtPassword = browser.findElement(by.name('password'));
    };
    this.btnLogin = function() {
        return btnLogin = browser.findElement(by.css('.btn.btn-block'));
    };
};
module.exports = new loginPage();