package com.cname.api.steps;

import com.cname.api.model.StepData;
import io.cucumber.java8.En;

import static io.restassured.RestAssured.basePath;

public class PostStepDefinitions extends BaseSteps implements En {

    public PostStepDefinitions(StepData stepData){
        Given("I have get all posts api endpoint", () -> {
            //Arrange
            basePath = "/posts";
        });
        When("I invoke get all posts api endpoint", () -> {
            //Act
            stepData.response = getAll();
        });
    }
}