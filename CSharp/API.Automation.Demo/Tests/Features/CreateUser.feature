Feature: CreateUser

Create new user

@tag1
Scenario: Create new use with valid inputs
	Given user with name "Peter"
	And user with job "Manager"
	When send request to create user
	Then validate user is created


@tag2
Scenario: Create new user with valid user object
	Given provide valid user payload "CreateUser.json"	
	When send request to create user
	Then validate user is created