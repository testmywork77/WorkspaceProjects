package demos;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.time.Duration;

public class ImplicitExplicitFluentWait {
    public static void main(String[] args){
        WebDriverManager.chromedriver().setup();
        WebDriver driver = new ChromeDriver();
        driver.manage().window().maximize();

        //Implicit Wait from Selenium v4.0
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));

        //Explicit Wait in from Selenium v4.0
        //WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

        // Fluent wait: Waiting 30 seconds for an element to be present on the page,
        // checking for its presence once every 5 seconds.
        /*
        Wait<WebDriver> fluentWait = new FluentWait<WebDriver>(driver)
                .withTimeout(Duration.ofSeconds(30))
                .pollingEvery(Duration.ofSeconds(5))
                .ignoring(NoSuchElementException.class);

        WebElement foo = fluentWait.until(new Function<WebDriver, WebElement>() {
          public WebElement apply(WebDriver driver) {
              return driver.findElement(By.id("foo"));
          }
        });
        */
        driver.get("https://www.selenium.dev/");
        driver.close();
    }
}
