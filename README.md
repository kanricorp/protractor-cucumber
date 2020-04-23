# README
## Prerequisites
1. Download and install node.js
2. Download and install JDK - Add JAVA as a env variable

## This repo
In order to successfully execute the test case you need to:

1. Open a terminal and place yourself in a directory of choice
2. Execute the command: `git clone https://github.com/kanricorp/protractor-cucumber.git`
3. Execute the command: `npm install`
3.b if protractor is not recognized execute the command: `npm install protractor -g`
4. In another terminal execute the command: `webdriver-manager update && webdriver-manager start`
4.b. If when running step 5, there's an error 'driver.version unkown': 
      -Stop the webdriver (Ctrl c or Ctrl s)
      -Go to Chrome and check the version (copy the version number)
      -Execute command: `webdriver-manager clean`
      -Execute command `webdriver-manager update --versions.chrome {version} && webdriver-manager start` - replacing {version} with your version of chrome 
      
5. In another terminal execute the command: `protractor cucumberConf.js`
