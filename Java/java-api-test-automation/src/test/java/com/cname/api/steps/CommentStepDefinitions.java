package com.cname.api.steps;

import com.cname.api.model.StepData;
import io.cucumber.java8.En;

import static io.restassured.RestAssured.basePath;

public class CommentStepDefinitions extends BaseSteps implements En {
    private StepData abc;

    public CommentStepDefinitions(StepData stepData){
        Given("I have get all comments api endpoint", () -> {
            //Arrange
            basePath = "/comments";
        });
        When("I invoke get all comments api endpoint", () -> {
            //Act
            stepData.response = getAll();
        });

        Given("I have comments api endpoint for specific post", () -> {
            //Arrange
            basePath = "/posts";
        });
        When("I invoke comments api endpoint for specific post as {string}", (String postId) -> {
            // https://jsonplaceholder.typicode.com/posts/1/comments
            stepData.response = getByPathParam(Integer.parseInt(postId), "{id}/comments");
        });
    }
}