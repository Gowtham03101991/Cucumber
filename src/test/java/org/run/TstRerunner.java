package org.run;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)

@CucumberOptions(features = "@Rerun\\failedsce.txt", glue = "org.step", monochrome = false, dryRun = false,

		plugin={"rerun:C:\\Users\\gowth\\eclipse-workspace\\Samplecucumber\\Rerun\\failedsce.txt"})


public class TstRerunner {
	

}
