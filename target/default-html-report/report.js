$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Contact.feature");
formatter.feature({
  "name": "Contact page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "login as a given user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "the user  logs in using following credentials",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "username",
        "\u003cusername\u003e"
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
        "\u003cfirstname\u003e"
      ]
    },
    {
      "cells": [
        "lastname",
        "\u003clastname\u003e"
      ]
    }
  ]
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "firstname",
        "lastname"
      ]
    },
    {
      "cells": [
        "user1",
        "John",
        "Doe"
      ]
    },
    {
      "cells": [
        "salesmanager101",
        "Peyton",
        "Harber"
      ]
    },
    {
      "cells": [
        "storemanager85",
        "Marcella Bnmbnmbnm",
        "Huels"
      ]
    }
  ]
});
formatter.scenario({
  "name": "login as a given user",
  "description": "",
  "keyword": "Scenario Outline",
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
        "Doe"
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "login as a given user",
  "description": "",
  "keyword": "Scenario Outline",
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
