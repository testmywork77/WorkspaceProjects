package com.cname.api.runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        monochrome = true,
        dryRun = false,
        plugin = {
                "pretty",
                "json:target/cucumber/cucumber-report.json"
        },
        glue = {"com/cname/api/steps"},
        features = {"classpath:com/cname/api/features/"},
        tags =  "@regression"
)
public class TestRunner {
}
