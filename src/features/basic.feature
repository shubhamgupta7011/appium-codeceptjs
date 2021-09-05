Feature: WorkOrder

  Scenario: User valid Login with all user roles
    Given User sign in with valid credential of client user
    Then User successfully logged in and Dashboard page displayed

  Scenario Outline: Invalid User Login
    When User enter credentials and tap on the sign in button
      | userEmail         | password   |
      | shubham@gmail.com | <password> |
    Then Error message "<message>" is displayed
    Examples:
      | password       | message                                               |
      | 12345123456667 | Invalid email address or password.                    |
      | 12345          | Password length should be between 8 to 20 characters. |

  Scenario: verify that user is able to edit the profile
    Given User sign in with valid credential of client user
    When User reaches to the edit profile screen
    And User enters the data in inbox field to edit
      | Name       | Number      |
      | Payal Gaur | 98475345567 |
    And User tap on the save button
    Then verify changes

  Scenario Outline: verify that user is able to edit the profile with invalid inputs
    Given User sign in with valid credential of client user
    When User reaches to the edit profile screen
    And User enters the data in inbox field to edit
      | Name   | Number   |
      | <Name> | <Number> |
    And User tap on the save button
    Then Error message "<Message>" is displayed
    Examples:
      | Name       | Number          | Message                               |
      |            |                 | Fill all the required fields properly. |
      | Payal Gaur | 234567898765432 | Phone number is not valid.            |

