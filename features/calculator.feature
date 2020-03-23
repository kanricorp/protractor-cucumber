Feature: Calculator Addition
  Scenario: Verify it is possible to perform a simple addition
    Given I view the homepage
    And I enter as "first" number the value 1
    And I enter as "second" number the value 2
    When I click on the button "Go"
    Then I see the result is 3