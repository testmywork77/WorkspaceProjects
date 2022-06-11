package org.example.tests;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class FirstTest {

    public static void main(String[] args){
        WebDriver driver;
        String browser = "edge";
        if(browser.equalsIgnoreCase("chrome")){
            System.setProperty("webdriver.chrome.driver", "./drivers/chromedriver.exe");
            driver = new ChromeDriver();
        } else if(browser.equalsIgnoreCase("edge")){
            System.setProperty("webdriver.edge.driver", "./drivers/msedgedriver.exe");
            driver = new EdgeDriver();
        } else{
            System.setProperty("webdriver.firefox.driver", "./drivers/chromedriver.exe");
            driver = new FirefoxDriver();
        }

        //timeout
        // driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        // driver.manage().timeouts().scriptTimeout(Duration.ofMinutes(2));
        // driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(10));

        driver.get("https://www.selenium.dev/");
        //close
        //driver.close();
    }
}