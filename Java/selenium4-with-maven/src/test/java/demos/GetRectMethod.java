package demos;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.Rectangle;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class GetRectMethod {

    public static void main(String[] args){
        WebDriverManager.chromedriver().setup();
        WebDriver driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("https://admin-demo.nopcommerce.com/");

        WebElement txtEmail = driver.findElement(By.id("Email"));
        Rectangle r = txtEmail.getRect();
        System.out.println("X: " + r.getX());
        System.out.println("Y: " + r.getY());
        System.out.println("Width " + r.getWidth());
        System.out.println("Height: " + r.getHeight());
        driver.close();
    }

}