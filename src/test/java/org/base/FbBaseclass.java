package org.base;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.jsoup.helper.DataUtil;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.it.Data;
import io.github.bonigarcia.wdm.WebDriverManager;

public class FbBaseclass {
	public static WebDriver  driver;
	
	public static  void browserlaunch() {
		WebDriverManager.chromedriver().setup();
		 driver=new ChromeDriver();
		
	}
	
	
	public static void maximize_window() {
		driver.manage().window().maximize();

	}
	
	public static void closebrowser() {
		driver.quit();
	}
	
	public static String readexcel(String sheetname,int row,int column) throws IOException {
		File f=new File("C:\\Users\\gowth\\eclipse-workspace\\Samplecucumber\\Excelsheet\\fbdata.xlsx");

		FileInputStream fin=new FileInputStream(f);
		
		Workbook b=new XSSFWorkbook(fin);
		
		Sheet sh = b.getSheet(sheetname);
		
		Row r = sh.getRow(row);
		
		Cell c = r.getCell(column);
		
		int type = c.getCellType();
		
		String name = null;
		
		if (type==1) {
			name=c.getStringCellValue();
		}
		else {
			double d = c.getNumericCellValue();
			long l=(long)d;
			String.valueOf(l);
		}
		
		return name;
		
		
		
	}
	

}
