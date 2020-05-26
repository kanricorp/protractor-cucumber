Feature: Login
Scenario: Verify it is possible to log in
Given user is on the login page
When user enter valid credentials
#And user clicks on login button
Then user is redirected to the home page