package com.vytrack.step_definitions;

import com.vytrack.pages.DashboardPage;
import com.vytrack.pages.LoginPage;
import com.vytrack.utilities.BrowserUtils;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

import java.util.List;
import java.util.Map;

public class ContactStepDefinition {

    @Then("the user should see following menu options")
    public void the_user_should_see_following_menu_options(List<String> menuOptions) {

        System.out.println("menuOptions = " + menuOptions.size());
        System.out.println("Menu options : "+menuOptions);

        BrowserUtils.waitFor(3);
        DashboardPage dashboardPage = new DashboardPage();
        List<String> actualMenuOptions = BrowserUtils.getElementsText(dashboardPage.menuOptions);// alt+enter--> ready type
        System.out.println(actualMenuOptions);

        Assert.assertEquals(menuOptions,actualMenuOptions);
    }

    @When("the user  logs in using following credentials")
    public void the_user_logs_in_using_following_credentials(Map<String, String> userData) {

        new LoginPage().login(userData.get("username"),userData.get("password"));

     //   System.out.println("userData = " + userData.get("firstname")+userData.get("lastname"));

        DashboardPage dashboardPage = new DashboardPage();
        dashboardPage.waitUntilLoaderScreenDisappear();
        String actualFullName =dashboardPage.getUserName();
        String expectedFullName = userData.get("firstname"+""+userData.get("lastname"));
        Assert.assertEquals(expectedFullName,expectedFullName);







    }
}
