package demos;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.HasAuthentication;
import org.openqa.selenium.UsernameAndPassword;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.net.URI;
import java.util.function.Predicate;

public class BasicAuthBidiAPIs {
    public static void main(String[] args){
        WebDriverManager.chromedriver().setup();
        WebDriver driver = new ChromeDriver();
        driver.manage().window().maximize();

        Predicate<URI> uriPredicate = uri -> uri.getHost().contains("the-internet.herokuapp.com");
        ((HasAuthentication) driver).register(uriPredicate, UsernameAndPassword.of("admin", "admin"));
        driver.get("https://the-internet.herokuapp.com/basic_auth");

        //driver.close();
    }

}
