package com.cname.api.model;

import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;

public class StepData {
    public RequestSpecification request;
    public Response response;
    public ValidatableResponse json;
}
