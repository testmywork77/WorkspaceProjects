package org.example;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.edge.EdgeDriver;

import static org.assertj.core.api.Assertions.assertThat;

public class EdgeTest {
    WebDriver driver;

    @BeforeAll
    static void setupClass() {
        WebDriverManager.edgedriver().setup();
    }

    @BeforeEach
    void setup() {
        driver = new EdgeDriver();
    }

    @AfterEach
    void teardown() {
        driver.quit();
    }

    @Test
    void test() {
        String sutUrl = "https://www.selenium.dev/";
        driver.get(sutUrl);
        String title = driver.getTitle();
        System.out.println("The title of " + sutUrl + " is " + title + " from System.out.println");
        assertThat(title).contains("Selenium");
    }
}
