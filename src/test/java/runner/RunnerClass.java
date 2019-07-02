package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features={"src/main/resources/sample2.feature"},       
		glue="stepdefinition",
		//plugin="html:target/htmlreport")
                plugin="json:target//cucumber.json")
       //tags={"@yellow"})
				//tags={"@yellow","@blue"})
				//tags={"~@yellow"})
				//tags={"@red"})
               // plugin="junit:target/xmlreport.xml")
public class RunnerClass {

}
