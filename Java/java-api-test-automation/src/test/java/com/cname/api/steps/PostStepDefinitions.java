package com.cname.api.steps;

import com.cname.api.model.StepData;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;

import static io.restassured.RestAssured.basePath;

public class PostStepDefinitions extends BaseSteps {

    private StepData stepData;

    public PostStepDefinitions(StepData stepData){
        this.stepData = stepData;
    }

    @Given("I have get all posts api endpoint")
    public void i_have_get_all_posts_api_endpoint() {
        //Arrange
        basePath = "/posts";
    }

    @When("I invoke get all posts api endpoint")
    public void i_invoke_get_all_posts_api_endpoint() {
        //Act
        stepData.response = getAll();
    }
}