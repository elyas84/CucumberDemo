$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Contact.feature");
formatter.feature({
  "name": "Contact page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenario({
  "name": "contact test with email",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@wip"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as a \"store manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "NavigateStepDefinition.the_user_logged_in_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates \"Customers\" \"Contacts\"",
  "keyword": "And "
});
formatter.match({
  "location": "NavigateStepDefinition.the_user_navigates(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click the \"mbrackstone9@example.com\" from contact",
  "keyword": "When "
});
formatter.match({
  "location": "ContactStepDefinition.the_user_click_the_from_contact(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the information should be same with database",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactStepDefinition.the_information_should_be_same_with_database()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "contact test with email",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@wip"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as a \"store manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "NavigateStepDefinition.the_user_logged_in_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates \"Customers\" \"Contacts\"",
  "keyword": "And "
});
formatter.match({
  "location": "NavigateStepDefinition.the_user_navigates(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click the \"poohchi@bark.edu\" from contact",
  "keyword": "When "
});
formatter.match({
  "location": "ContactStepDefinition.the_user_click_the_from_contact(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the information \"poohchi@bark.edu\" should be same with database",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactStepDefinition.the_information_should_be_same_with_database(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});