package com.cname.api.steps;

import com.cname.api.model.StepData;
import io.cucumber.java8.En;

import static io.restassured.RestAssured.basePath;

public class UserStepDefinitions extends BaseSteps implements En {

    public UserStepDefinitions(StepData stepData){
        Given("I have get all users api endpoint", () -> {
            //Arrange
            basePath = "/users";
        });
        When("I invoke get all users api endpoint", () -> {
            stepData.response = getAll();
        });
    }
}