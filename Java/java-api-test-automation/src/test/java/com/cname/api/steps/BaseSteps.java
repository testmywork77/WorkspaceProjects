package com.cname.api.steps;

import com.cname.api.model.StepData;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class BaseSteps {
    Response response;
    private RequestSpecification requestSpec;

    public BaseSteps(){
        baseURI = "https://jsonplaceholder.typicode.com/";
    }

    public Response getAll(){
        response =
                given()
                        .log().all()
                        .header("Content-Type", ContentType.JSON)
                .when()
                        .get()
                .then()
                        .log().all()
                        .extract()
                        .response();

        return response;
    }

    public Response getByPathParam(int id, String url){
        response =
                given()
                        .log().all()
                        .header("Content-Type", ContentType.JSON)
                        .pathParam("id", id)
                .when()
                        .get(url)
                        .then()
                        .log().all()
                        .extract()
                        .response();

        return response;
    }

}
