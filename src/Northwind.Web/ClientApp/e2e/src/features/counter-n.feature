Feature: Increment counter by N
    This feature lets user increment the counter

Scenario: Basic increment N scenario
    Given I am on the counter-n page
    When I set the value of N to 5
    Then N should show "5"
    When I click on the increment button 5 times
    Then The counter should show "25"

