package com.vytrack.step_definitions;

import com.vytrack.pages.ContactsPage;
import com.vytrack.pages.DashboardPage;
import com.vytrack.pages.LoginPage;
import com.vytrack.utilities.BrowserUtils;
import com.vytrack.utilities.ConfigurationReader;
import com.vytrack.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class NavigateStepDefinition {

    @Given("the user in the login page")
    public void the_user_in_the_login_page() {
        System.out.println("sales manager in the login page");
    }

    @When("the user navigate to fleet, Vehicle")
    public void the_user_navigate_to_fleet_Vehicle() {
        System.out.println("sales manager navigate from Fleet to Vehicle");
    }

    @Then("the url should be expected Fleet url")
    public void the_url_should_be_expected_Fleet_url() {
        System.out.println("Expected Fleet url == PASS");
    }

    @When("the user navigate to Marketing Campany")
    public void the_user_navigate_to_Marketing_Campany() {
        System.out.println("Sales manager navigate to Marketing Company");
    }

    @Then("the url should be expected Campngy url")
    public void the_url_should_be_expected_Campngy_url() {
        System.out.println("expected company url == PASS");
    }

    @When("the user navigate to Activities to Calendar page")
    public void the_user_navigate_to_Activities_to_Calendar_page() {
        System.out.println("sales manager navigate from Activities to Calendar");
    }

    @Then("the url should be expected Calendar url")
    public void the_url_should_be_expected_Calendar_url() {
        System.out.println("expected Calendar url==PASS");
    }

    @When("the user navigate to Marketing Company")
    public void the_user_navigate_to_Marketing_Company() {
        System.out.println("sales manager navigate marketing-company");
    }

    @Then("the url should be expected Company url")
    public void the_url_should_be_expected_Company_url() {
        System.out.println("the expected url is will be the given url");
    }

    @When("the user navigates {string} {string}")
    public void the_user_navigates(String tab, String module) {
        new DashboardPage().navigateToModule(tab, module);

    }

    @Then("default page number should be {int}")
    public void default_page_number_should_be(Integer expectedPageNumber) {
        ContactsPage contactsPage = new ContactsPage();

        Integer actualNumber = Integer.parseInt(contactsPage.pageNumber.getAttribute("value"));
        Assert.assertEquals(actualNumber, expectedPageNumber);

    }
    @Given("the user logged in as a {string}")
    public void the_user_logged_in_as_a(String user) {

        String url = ConfigurationReader.get("url");
        Driver.get().get(url);
        String username = null;
        String password = null;
        if(user.equals("driver")){
            username = ConfigurationReader.get("driver_username");
            password = ConfigurationReader.get("driver_password");
        }else if(user.equals("sales manager")){
            username = ConfigurationReader.get("sales_manager_username");
            password = ConfigurationReader.get("sales_manager_password");
        }else if(user.equals("store manager")){
            username = ConfigurationReader.get("store_manager_username");
            password = ConfigurationReader.get("store_manager_password");
        }
        LoginPage loginPage = new LoginPage();
        loginPage.login(username,password);


    }






}
