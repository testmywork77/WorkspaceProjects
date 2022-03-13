package com.cname.api.steps;

import com.cname.api.model.StepData;
import io.cucumber.java8.En;
import org.junit.Assert;

public class CommonStepDefinitions implements En {

    public CommonStepDefinitions(StepData stepData){
        Then("I should ensure that response status code as {int}", (Integer statusCode) -> {
            //Assertion
            Assert.assertEquals(stepData.response.statusCode(), (int)statusCode);
        });
    }
}
