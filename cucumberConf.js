exports.config = {

  seleniumAddress: 'http://localhost:4444/wd/hub', // This is targetting your local running instance of the selenium webdriver

  capabilities: {
    browserName: 'chrome', // You can use any browser you want. On a CI environment you're going to want to use PhantomJS
    trustAllSSLCertificates: true,
    acceptInsecureCerts: true,
    ACCEPT_SSL_CERTS: true
    //these three configurations are needed when we are using a scure site (https protocol)
  },

  framework: 'custom', //We need this line to use the cucumber framework

  frameworkPath: require.resolve('protractor-cucumber-framework'), // Here it is

  specs: [
    './features/login.feature'     // Specs here are the cucumber feature files
  ],

  cucumberOpts: {
    require: ['./step_definitions/*.js'] // This is where we'll be writing our actual tests
  },

  params: {
    env: {
      hostname: 'http://0.0.0.0:8000' // Whatever the address of your app is
    }
  },
  /*
  onPrepare: function() {
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
  }*/
};