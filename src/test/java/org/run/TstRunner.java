package org.run;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.step.Jvmreport;

import io.cucumber.java.After;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
 
// --- Location of feature file folder
// --- package name of step definition class

@CucumberOptions(features = "src\\test\\resources\\featurefile", glue = "org.step", monochrome = false, dryRun = false, strict = true,

		plugin={"html:C:\\Users\\gowth\\eclipse-workspace\\Samplecucumber\\Reports\\htmlreports",
	"json:C:\\Users\\gowth\\eclipse-workspace\\Samplecucumber\\Reports\\jsonreport\\fb.json",
	"junit:C:\\Users\\gowth\\eclipse-workspace\\Samplecucumber\\Reports\\junitreport\\FACE.xml",
	"rerun:C:\\Users\\gowth\\eclipse-workspace\\Samplecucumber\\Rerun\\failedsce.txt"})


public class TstRunner {
	
	@AfterClass
	public static void afterallsenario() {
	 
		Jvmreport.generateJvmreport("C:\\Users\\gowth\\eclipse-workspace\\Samplecucumber\\Reports\\jsonreport\\fb.json");
		
	}

}
