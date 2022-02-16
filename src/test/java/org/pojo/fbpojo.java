package org.pojo;

import org.base.FbBaseclass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class fbpojo extends FbBaseclass {
	
	public fbpojo() {
		PageFactory.initElements(driver, this);
		
	}
	
	@FindBy(id="email")
	private WebElement txtemail;
	
	@FindBy(name="pass")
	private WebElement txtpass;
	
	@FindBy(xpath="//button[@type=\"submit\"]")
	private WebElement btnlogin;

	public WebElement getTxtemail() {
		return txtemail;
	}

	public WebElement getTxtpass() {
		return txtpass;
	}

	public WebElement getBtnlogin() {
		return btnlogin;
	}
	
	

}
