@regression
Feature: Comments REST API CRUD Functionality
  @comment
  Scenario: Verify get all comments functionality
    Given I have get all comments api endpoint
    When I invoke get all comments api endpoint
    Then I should ensure that response status code as 200

  @commentsByPostId
  Scenario Outline: Verify all comments functionality for the specific post
    Given I have comments api endpoint for specific post
    When I invoke comments api endpoint for specific post as "<postId>"
    Then I should ensure that response status code as 200
    Examples:
    |postId|
    |1     |
    |2     |
