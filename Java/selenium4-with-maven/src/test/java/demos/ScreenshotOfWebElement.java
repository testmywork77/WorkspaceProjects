package demos;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;

import java.io.File;
import java.io.IOException;

public class ScreenshotOfWebElement {

    public static void main(String[] args) throws IOException {
        WebDriverManager.chromedriver().setup();
        WebDriver driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("https://admin-demo.nopcommerce.com/");

        WebElement txtEmail = driver.findElement(By.id("Email"));

        File sourceScreenshotFile = txtEmail.getScreenshotAs(OutputType.FILE);
        File destinationScreenshotFile = new File("./target/txtEmail.png");
        FileUtils.copyFile(sourceScreenshotFile, destinationScreenshotFile);

        driver.close();
    }

}