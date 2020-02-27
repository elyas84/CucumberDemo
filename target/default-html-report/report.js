$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/AccountTypes.feature");
formatter.feature({
  "name": "Account types",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Driver user",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as a \"driver\"",
  "keyword": "Given "
});
formatter.match({
  "location": "NavigateStepDefinition.the_user_logged_in_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates \"Activities\" \"Calendar Events\"",
  "keyword": "When "
});
formatter.match({
  "location": "NavigateStepDefinition.the_user_navigates(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title should contains \"Calendar Events - Activities\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.the_title_should_contains(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Sales manager user",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as a \"sales manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "NavigateStepDefinition.the_user_logged_in_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates \"Customers\" \"Accounts\"",
  "keyword": "When "
});
formatter.match({
  "location": "NavigateStepDefinition.the_user_navigates(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title should contains \"Accounts - Customers\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.the_title_should_contains(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/LoginWithParameteres.feature");
formatter.feature({
  "name": "Login with parameters",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login as a driver",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in using \"user11\" and \"UserUser123\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.user_logs_in_using_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.the_user_should_be_able_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title should contains \"Dashboard\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.the_title_should_contains(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login as as sales manager",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in using \"salesmanager123\" and \"UserUser123\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.user_logs_in_using_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.the_user_should_be_able_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});