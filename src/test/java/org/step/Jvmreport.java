package org.step;



import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class Jvmreport {
	public static void generateJvmreport(String jsonpath) {
		
		//1.Target file location
		File f=new File("C:\\Users\\gowth\\eclipse-workspace\\Samplecucumber\\Reports\\jvmreport");
		
		//2.user configuration class.
		Configuration con = new Configuration(f, "FACEBOOK");
		//additional
		con.addClassifications("Tool", "Eclipse");
		con.addClassifications("browser", "chrome98");
		con.addClassifications("Language", "Java");
		
		//3.add json path to list
		List<String> li = new ArrayList<String>();
		li.add(jsonpath);
		
		//4reportbuilder
		
		ReportBuilder res=new ReportBuilder(li, con);
		res.generateReports();

	}

}
