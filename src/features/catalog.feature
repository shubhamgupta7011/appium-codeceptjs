Feature: verify Catalog

  @smoke
  Scenario: verify simple Activity indicator
    Given user is on catalog list page
    And user tap on Activity indicator
    Then verify Activity indicator page and loader

  @smoke
  Scenario: verify simple alert view
    Given user is on catalog list page
    And user tap on Alert View
    And user tap on Simple Alert
    Then verify Simple Alert
    And click on alert ok button

  @smoke
  Scenario: verify ok and cancel alert view
    Given user is on catalog list page
    And user tap on Alert View
    And user tap on Okay and Cancel Alert
    Then verify Okay and Cancel Alert
    And click on alert ok button

  @smoke
  Scenario: verify text enter alert
    Given user is on catalog list page
    And user tap on Alert View
    And user tap on text enter alert
    And Type in it
    Then verify text enter alert
    And click on alert ok button