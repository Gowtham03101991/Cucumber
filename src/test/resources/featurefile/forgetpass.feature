@smoke @allscenerio
Feature: To validate forgetten password functionallity in fb

  Scenario: 
    To validate forget password using phonenumber

    Given user have to enter fb login page
    And click forget password button
    When enter phone number
    |9952033655|123456789|987654322|00000000000|1111111111|
    And click search button
    Then Navigate to reset page