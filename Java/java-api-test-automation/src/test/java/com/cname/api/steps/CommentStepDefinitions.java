package com.cname.api.steps;

import com.cname.api.model.StepData;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import static io.restassured.RestAssured.basePath;

public class CommentStepDefinitions extends BaseSteps {

    private StepData stepData;

    public CommentStepDefinitions(StepData stepData){
        this.stepData = stepData;
    }

    @Given("I have get all comments api endpoint")
    public void i_have_get_all_comments_api_endpoint() {
        // Arrange
        basePath = "/comments";
    }

    @When("I invoke get all comments api endpoint")
    public void i_invoke_get_all_comments_api_endpoint() {
        // Act
        stepData.response = getAll();
    }

    @Given("I have comments api endpoint for specific post")
    public void i_have_comments_api_endpoint_for_specific_post() {
        // Arrange
        basePath = "/posts";
    }

    @When("I invoke comments api endpoint for specific post as {string}")
    public void i_invoke_comments_api_endpoint_for_specific_post_as(String postId) {
        // https://jsonplaceholder.typicode.com/posts/1/comments
        stepData.response = getByPathParam(Integer.parseInt(postId), "{id}/comments");
    }

}