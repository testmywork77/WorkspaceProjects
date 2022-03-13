@regression @user
Feature: Users REST API CRUD Functionality
  Scenario: Verify get all users functionality
    Given I have get all users api endpoint
    When I invoke get all users api endpoint
    Then I should ensure that response status code as 200