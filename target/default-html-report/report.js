$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Contact.feature");
formatter.feature({
  "name": "Contact page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "login as a given user",
  "description": "",
  "keyword": "Scenario",
  "tags": [
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
  "name": "the user  logs in using following credentials",
  "rows": [
    {
      "cells": [
        "username",
        "user1"
      ]
    },
    {
      "cells": [
        "password",
        "UserUser123"
      ]
    },
    {
      "cells": [
        "firstname",
        "John"
      ]
    },
    {
      "cells": [
        "lastname",
        "Lastname"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "ContactStepDefinition.the_user_logs_in_using_following_credentials(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be to login",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.the_user_should_be_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});