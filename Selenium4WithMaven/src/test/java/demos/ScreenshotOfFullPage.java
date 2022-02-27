package demos;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.io.FileHandler;
import java.io.File;
import java.io.IOException;

public class ScreenshotOfFullPage {

    public static void main(String[] args) throws IOException {
        WebDriverManager.firefoxdriver().setup();
        WebDriver driver = new FirefoxDriver();
        driver.manage().window().maximize();
        driver.get("https://admin-demo.nopcommerce.com/");

        File sourceScreenshotFile = ((FirefoxDriver) driver).getFullPageScreenshotAs(OutputType.FILE);
        FileHandler.copy(sourceScreenshotFile, new File("./target/fullPageScreenshot.png"));
        driver.close();
    }

}