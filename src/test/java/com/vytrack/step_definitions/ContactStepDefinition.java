package com.vytrack.step_definitions;

import com.vytrack.pages.ContactInfoPage;
import com.vytrack.pages.ContactsPage;
import com.vytrack.pages.DashboardPage;
import com.vytrack.pages.LoginPage;
import com.vytrack.utilities.BrowserUtils;
import com.vytrack.utilities.DBUtils;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.cucumber.java.it.Ma;
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

    @When("the user click the {string} from contact")
    public void the_user_click_the_from_contact(String email) {

        BrowserUtils.waitFor(3);
       ContactsPage contactsPage = new ContactsPage();
       contactsPage.getContactEmail(email).click();

    }

    @Then("the information should be same with database")
    public void the_information_should_be_same_with_database() {
        BrowserUtils.waitFor(3);

        // Getting information from UI---> from Browser

        ContactInfoPage contactInfoPage = new ContactInfoPage();
        String actualFullName =contactInfoPage.contactFullName.getText();
        String actualEmail = contactInfoPage.email.getText();
        String actualPhone = contactInfoPage.phone.getText();

        System.out.println("actualFullName = " + actualFullName);
        System.out.println("actualEmail = " + actualEmail);
        System.out.println("actualPhone = " + actualPhone);

      // Getting information from database

        String myQuery = "Select concat(name_prefix,' ', first_name,' ' ,last_name)as fullname  , e.email, p.phone\n" +
                "from orocrm_contact c join orocrm_contact_email e\n" +
                "on c.id = e.owner_id\n" +
                "join orocrm_contact_phone p \n" +
                "on e.owner_id = p.owner_id\n" +
                "where e.email='mbrackstone9@example.com';";

        Map<String, Object> rowMap = DBUtils.getRowMap(myQuery);

        // Comparing UI to Database

         String expectedFullName = (String)rowMap.get("fullname");
        String expectedEmail = (String) rowMap.get("email");
        String expectedPhone = (String) rowMap.get("phone");


        System.out.println("expectedEmail = " + expectedEmail);
        System.out.println("expectedPhone = " + expectedPhone);

        Assert.assertEquals(expectedFullName,actualFullName);
        Assert.assertEquals(expectedEmail,actualEmail);
        Assert.assertEquals(expectedPhone,actualPhone);

    }

    @Then("the information {string} should be same with database")
    public void the_information_should_be_same_with_database(String email) {

        BrowserUtils.waitFor(3);

        // Getting information from UI---> from Browser

        ContactInfoPage contactInfoPage = new ContactInfoPage();
        String actualFullName =contactInfoPage.contactFullName.getText();
        String actualEmail = contactInfoPage.email.getText();
        String actualPhone = contactInfoPage.phone.getText();

        System.out.println("actualFullName = " + actualFullName);
        System.out.println("actualEmail = " + actualEmail);
        System.out.println("actualPhone = " + actualPhone);

        // Getting information from database

        String myQuery = "Select concat(name_prefix,' ', first_name,' ' ,last_name)as fullname  , e.email, p.phone\n" +
                "from orocrm_contact c join orocrm_contact_email e\n" +
                "on c.id = e.owner_id\n" +
                "join orocrm_contact_phone p \n" +
                "on e.owner_id = p.owner_id\n" +
                "where e.email='"+email+"';";

        Map<String, Object> rowMap = DBUtils.getRowMap(myQuery);

        // Comparing UI to Database

        String expectedFullName = (String)rowMap.get("fullname");
        String expectedEmail = (String) rowMap.get("email");
        String expectedPhone = (String) rowMap.get("phone");


        System.out.println("expectedEmail = " + expectedEmail);
        System.out.println("expectedPhone = " + expectedPhone);

        Assert.assertEquals(expectedFullName,actualFullName);
        Assert.assertEquals(expectedEmail,actualEmail);
        Assert.assertEquals(expectedPhone,actualPhone);


    }




}
