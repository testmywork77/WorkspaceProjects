package com.cname.api.steps;

import com.cname.api.model.StepData;
import io.cucumber.java.en.Then;
import org.junit.Assert;

public class CommonStepDefinitions {

    private StepData stepData;

    public CommonStepDefinitions(StepData stepData){
        this.stepData = stepData;
    }

    @Then("I should ensure that response status code as {int}")
    public void i_should_ensure_that_response_status_code_as(Integer statusCode) {
        // Assertion
        Assert.assertEquals(stepData.response.statusCode(), (int)statusCode);
    }
}