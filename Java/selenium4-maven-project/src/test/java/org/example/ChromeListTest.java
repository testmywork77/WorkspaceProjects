package org.example;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;

import io.github.bonigarcia.wdm.WebDriverManager;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.WebDriver;

public class ChromeListTest {

    List<WebDriver> driverList;

    WebDriverManager wdm = WebDriverManager.chromedriver();

    @BeforeEach
    void setupTest() {
        driverList = wdm.create(2);
    }

    @AfterEach
    void teardown() {
        wdm.quit();
    }

    @Test
    void test() {
        driverList.forEach((driver) -> {
            driver.get("https://www.selenium.dev/");
            assertThat(driver.getTitle()).contains("Selenium");
        });
    }

}
