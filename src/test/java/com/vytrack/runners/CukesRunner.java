package com.vytrack.runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(

        //where our feature files are located
        // We whether we can write by hand this location or just click the copyPath
        features = "src/test/resources/features/",
        glue = "com/vytrack/step_definitions" ,
        dryRun =  false ,
        tags = "@navigate"

)
public class CukesRunner {


}
