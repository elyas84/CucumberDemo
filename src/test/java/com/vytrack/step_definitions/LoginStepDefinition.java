package com.vytrack.step_definitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginStepDefinition {

    @Given("the user ins in the login page")
    public void the_user_ins_in_the_login_page() {
        System.out.println("I opened browser and navigate to qa3.vytrack.com");
    }

    @When("the users enter the driver information")
    public void the_users_enter_the_driver_information() {
        System.out.println("I entered driver1 and UserUser123");
    }

    @Then("the user should be to login")
    public void the_user_should_be_to_login() {
        System.out.println("I verified that I see dashboard page");
    }
    @When("the user enter the sales manager information")
    public void the_user_enter_the_sales_manager_information() {
        System.out.println("I entered salesmanager85 and UserUser123");
    }

    @Then("the user should be able to login")
    public void the_user_should_be_able_to_login() {
        System.out.println("I verified that I see dashboard");
    }
    @When("the user enter the store manager information")
    public void the_user_enter_the_store_manager_information() {
        System.out.println("I entered Store manager info");
    }

}
