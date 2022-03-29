package com.cname.api.runners;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;
import org.junit.Test;
import java.io.File;
import java.util.ArrayList;
import java.util.List;

public class ReportGen {
    @Test
    public void generateReport() {
        File reportOutputDirectory = new File("target/cucumber/report");
        List<String> jsonFiles = new ArrayList<>();
        jsonFiles.add("target/cucumber/cucumber-report.json");
        String buildNumber = "1.0";
        String projectName = "API Test Automation";
        Configuration configuration = new Configuration(reportOutputDirectory, projectName);
        configuration.setBuildNumber(buildNumber);

        ReportBuilder reportBuilder = new ReportBuilder(jsonFiles, configuration);
        reportBuilder.generateReports();
    }
}
