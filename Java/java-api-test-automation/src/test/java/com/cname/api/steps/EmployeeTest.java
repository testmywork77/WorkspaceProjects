package com.cname.api.steps;

import io.restassured.response.Response;
import org.junit.Assert;
import org.junit.Test;

import java.util.HashMap;
import java.util.Map;

import static io.restassured.RestAssured.*;

public class EmployeeTest {
    /*
    given()
        set cookies, add authentication, add params, add query params, set headers
    when()
        get, post, put,     delete...
    then()
        validate status code, extract response, extract headers,cookies and response body
    */

   @Test
    public void getEmployees(){
        baseURI = "http://localhost:3000";
        basePath = "/employees";
        Response response =
                given()
                        .header("Content-Type", "application/json")
                .when()
                        .log().all()
                        .get()
                .then()
                        .log().all()
                        .extract()
                        .response();

        Assert.assertEquals(200 , response.statusCode());
    }

    //@Test
    public void getEmployeeById(){
        baseURI = "http://localhost:3000";
        basePath = "/employees/1";
        Response response =
                given()
                        .header("Content-Type", "application/json")
                .when()
                        .log().all()
                        .get()
                .then()
                        .log().all()
                        .extract()
                        .response();

        Assert.assertEquals(200, response.statusCode());
        Assert.assertEquals("typicode", response.jsonPath().get("author").toString());
    }

    //@Test
    public void postEmployeeTest(){
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("id", "5");
        map.put("name", "James");
        map.put("email", "James@gmail.com");
        map.put("loc", "Hyd");
        System.out.println(map);

        baseURI = "http://localhost:3000";
        basePath = "/employees";
        Response response =
                given()
                        .header("Content-Type", "application/json")
                        .header("Accept", "application/json")
                        .body(map)
                .when().
                        log().all()
                        .post()
                .then().
                        log().all()
                        .extract()
                        .response();
        Assert.assertEquals(201, response.statusCode());
    }

    //@Test
    public void putEmployeeTest(){
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("id", "5");
        map.put("name", "James");
        map.put("email", "James@gmail.com");
        map.put("loc", "Hyd");
        System.out.println(map);

        baseURI = "http://localhost:3000";
        basePath = "/employees/2";
        Response response =
                given()
                        .header("Content-Type", "application/json")
                        .header("Accept", "application/json")
                        .body(map)
                .when()
                        .log().all()
                        .put("")
                .then().
                        log().all()
                        .extract()
                        .response();

        Assert.assertEquals(200, response.statusCode());
    }

    //@Test
    public void deleteEmployeeTest(){
        baseURI = "http://localhost:3000";
        basePath = "/employees/2";
        Response response =
                given()
                        .header("Content-Type", "application/json")
                        .header("Accept", "application/json")
                .when()
                        .log().all()
                        .delete()
                .then()
                        .log().all()
                        .extract()
                        .response();

        // 204: No Content
        Assert.assertEquals(200, response.statusCode());
    }
}
