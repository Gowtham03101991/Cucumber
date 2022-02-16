package org.step;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.apache.poi.ss.usermodel.Cell;
import org.base.FbBaseclass;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.pojo.fbpojo;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class Stepdef extends FbBaseclass {


@Given("user have to enter fb login page")
public void user_have_to_enter_fb_login_page() throws InterruptedException {
	driver.get("https://www.facebook.com/");
    Thread.sleep(4000);
}

@Given("user have to maximize the screen")
public void user_have_to_maximize_the_screen() {
   maximize_window();
}

@When("user have to enter valid email and valid password")
public void user_have_to_enter_valid_email_and_valid_password(DataTable d) throws InterruptedException, IOException {
	
	List<List<String>> li = d.asLists();
	
	WebElement txtemail = driver.findElement(By.id("email"));
	txtemail.sendKeys(li.get(0).get(0));
    
	WebElement txtpass = driver.findElement(By.name("pass"));
	txtpass.sendKeys(li.get(1).get(1));
	
	
	Thread.sleep(3000);
}

@When("use have to click login button")
public void use_have_to_click_login_button() throws InterruptedException {
	driver.findElement(By.xpath("//button[@name='login']")).click();
	Thread.sleep(3000);
}

@Then("user have to enter invalid credentails page")
public void user_have_to_enter_invalid_credentails_page() {
   System.out.println("Invalid credential page");
}

@Given("click forget password button")
public void click_forget_password_button() {
    driver.findElement(By.xpath("//a[text() = \"Forgotten password?\"]")).click();
}

@When("enter phone number")
public void enter_phone_number(DataTable d) {
	
	List<String> L = d.asList();
	
    driver.findElement(By.xpath("//input[@placeholder='Email address or mobile number']")).sendKeys(L.get(10));
}

@When("click search button")
public void click_search_button() {
   driver.findElement(By.xpath("//button[@type='submit']")).click();
}

@Then("Navigate to reset page")
public void navigate_to_reset_page() {
    System.out.println("user @ Invalid credential page");
}

@When("user have to enter valid email and invalid password")
public void user_have_to_enter_valid_email_and_invalid_password(DataTable d) {
	
	List<List<String>> li = d.asLists();
	WebElement txtemail = driver.findElement(By.id("email"));
	txtemail.sendKeys(li.get(0).get(0));
    
	WebElement txtpass = driver.findElement(By.name("pass"));
	txtpass.sendKeys(li.get(1).get(1));
    
}

@When("user have to enter invalid email and invalid password")
public void user_have_to_enter_invalid_email_and_invalid_password(DataTable d) {
	
	Map<String, String> Map = d.asMap(String.class, String.class);
	
	WebElement txtemail = driver.findElement(By.id("email"));
	txtemail.sendKeys(Map.get("user"));
    
	WebElement txtpass = driver.findElement(By.name("pass"));
	txtpass.sendKeys(Map.get("pass"));
 
}

@When("user have to enter valid email and old password")
public void user_have_to_enter_valid_email_and_old_password(DataTable d) {
	
	List<Map<String, String>> Maps = d.asMaps();
	
	
	WebElement txtemail = driver.findElement(By.id("email"));
	txtemail.sendKeys(Maps.get(1).get("pass"));
    
	WebElement txtpass = driver.findElement(By.name("pass"));
	txtpass.sendKeys(Maps.get(0).get("phoneno"));
   
}


}
