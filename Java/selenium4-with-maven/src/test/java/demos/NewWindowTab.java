package demos;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WindowType;
import org.openqa.selenium.chrome.ChromeDriver;

public class NewWindowTab {

    public static void main(String[] args){

        WebDriverManager.chromedriver().setup();
        WebDriver driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("https://www.selenium.dev/");

        driver.switchTo().newWindow(WindowType.TAB);
        driver.get("https://nodejs.org/en/");

        driver.switchTo().newWindow(WindowType.WINDOW);
        driver.get("https://www.cypress.io/");

        driver.close();
    }

}
