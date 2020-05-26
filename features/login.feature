Feature: Login
Scenario: Verify it is possible to log in
Given user is on the login page
When user logs in with "valid" credentials
Then user is redirected to the home page