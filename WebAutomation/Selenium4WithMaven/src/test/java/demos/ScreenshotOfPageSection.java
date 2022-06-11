package demos;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.io.File;
import java.io.IOException;

public class ScreenshotOfPageSection {

    public static void main(String[] args) throws IOException {
        WebDriverManager.chromedriver().setup();
        WebDriver driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("https://admin-demo.nopcommerce.com/");

        WebElement loginSection = driver.findElement(By.tagName("form"));

        File sourceScreenshotFile = loginSection.getScreenshotAs(OutputType.FILE);
        File destinationScreenshotFile = new File("./target/loginSection.png");
        FileUtils.copyFile(sourceScreenshotFile, destinationScreenshotFile);

        driver.close();
    }

}