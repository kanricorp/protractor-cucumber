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
4. In another terminal execute the command: `webdriver-manager update` then `webdriver-manager start` 
      
In the terminal you should see something like this: "Selenium Server is up and running on port 4444"  - DO NOT CLOSE THIS TERMIANL

![image](https://user-images.githubusercontent.com/57548352/80135275-64ae4880-8576-11ea-8649-0fb2b077442f.png)

4.b. If when running step 5, there's an error 'driver.version unkown': 
      -Stop the webdriver (Ctrl c or Ctrl s)
      -Go to Chrome and check the version (copy the version number)
      -Execute command: `webdriver-manager clean`
      -Execute command `webdriver-manager update --versions.chrome {version} && webdriver-manager start` - replacing {version} with your version of chrome 
      
5. In another terminal execute the command: `protractor cucumberConf.js`
After this, you should see the browser opening and closing. 

The cmd line will throw this if the test passed: 
![image](https://user-images.githubusercontent.com/57548352/80135621-cec6ed80-8576-11ea-889f-b55b4ba6c606.png)


