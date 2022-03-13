package com.cname.api.steps;

import com.cname.api.model.StepData;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import static io.restassured.RestAssured.basePath;

public class UserStepDefinitions extends BaseSteps  {

    private StepData stepData;

    public UserStepDefinitions(StepData stepData){
        this.stepData = stepData;
    }

    @Given("I have get all users api endpoint")
    public void i_have_get_all_users_api_endpoint() {
        // Arrange
        basePath = "/users";
    }
    @When("I invoke get all users api endpoint")
    public void i_invoke_get_all_users_api_endpoint() {
        // Act
        stepData.response = getAll();
        System.out.println("response: " + stepData.response.prettyPrint());
    }

}