@regression @post
Feature: Posts REST API CRUD Functionality
  Scenario: Verify get all posts functionality
    Given I have get all posts api endpoint
    When I invoke get all posts api endpoint
    Then I should ensure that response status code as 200