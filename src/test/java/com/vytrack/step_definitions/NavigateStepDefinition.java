package com.vytrack.step_definitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

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

}
