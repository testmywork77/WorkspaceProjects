package org.example.tests;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;

public class WebDriverMgrTest {

    public static void main(String[] args){
        //WebDriver driver = WebDriverManager.chromedriver().create();
        WebDriver driver = WebDriverManager.edgedriver().create();
        driver.get("https://www.google.com");
        System.out.println(driver.getTitle());
        System.out.println(driver.getCurrentUrl());
        driver.quit();
    }

}
