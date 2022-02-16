package org.step;

import java.util.concurrent.TimeUnit;

import org.base.FbBaseclass;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;

public class Hooks extends FbBaseclass {

	@Before(order=1)
	public void befsec1() throws InterruptedException {
		System.out.println("befsec1");
		browserlaunch();
//		Thread.sleep(4000);
	     driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);	
	}
	@Before(order=2)
	public void befsec2() {
		System.out.println("befsec2");
	}
	@Before(order=3)
	public void befsec3() throws InterruptedException {
		System.out.println("befsec3");
	}
	@After(order=3)
	public void aftsec3() {
		System.out.println("aftsec3");
	}
	@After(order=1)
	public void aftsec1(Scenario s) {
		if (s.isFailed()) {
			TakesScreenshot tk=(TakesScreenshot)driver;
			byte[] screenshot = tk.getScreenshotAs(OutputType.BYTES);
			s.embed(screenshot, "image/png");
			
		}
		
		
		System.out.println("aftsec1");
		closebrowser();	
	}
	@After(order=2)
	public void aftsec2() {
		System.out.println("aftsec2");

	}

}
