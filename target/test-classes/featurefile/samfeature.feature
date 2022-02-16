@allscenerio
Feature: To validate login functionality of fb

Background:
 Given user have to enter fb login page

Scenario:
To validate login by valid email invalid password

    And user have to maximize the screen
    When user have to enter valid email and invalid password
    |123@gamil.com|11111111|321@gamil.com|00000000|
    |000@gmail.com|2222222|111@gmail.com|22222222|
    |3333@gmail.com|33333333|444@gmail.com|1111111|
    And use have to click login button
    Then user have to enter invalid credentails page
@smoke
Scenario:
To validate login by invalid email invalid password

    And user have to maximize the screen
    When user have to enter invalid email and invalid password
    |user|onedim@map.com|
    |pass|12345|
    |email|1map@greens.com|
    And use have to click login button
    Then user have to enter invalid credentails page
    
    Scenario:
To validate login by valid email old password

    And user have to maximize the screen
    When user have to enter valid email and old password
    |user|pass|phoneno|
    |u1|twomap1@map.com|12345667|
    |u2|twomap2@map.com|09876544|
    And use have to click login button
    Then user have to enter invalid credentails page
