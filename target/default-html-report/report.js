$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/AccountTypes.feature");
formatter.feature({
  "name": "Account types",
  "description": "  ​",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login with different users \u003cusertypes\u003e",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "the user logged in as a \"\u003cusertypes\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "the user navigates \"\u003ctab\u003e\" \"\u003cmodule\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the title should contains \"\u003ctitle\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "drivers",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "usertypes",
        "tab",
        "module",
        "title"
      ]
    },
    {
      "cells": [
        "driver",
        "Fleet",
        "Vehicles Model",
        "Vehicles Model - Entities - System - Car - Entities - System"
      ]
    },
    {
      "cells": [
        "driver",
        "Customers",
        "Accounts",
        "Accounts - Customers"
      ]
    },
    {
      "cells": [
        "driver",
        "Customers",
        "Contacts",
        "Contacts - Customers"
      ]
    },
    {
      "cells": [
        "driver",
        "Activities",
        "Calendar Events",
        "Calendar Events - Activities"
      ]
    },
    {
      "cells": [
        "driver",
        "System",
        "Jobs",
        "Jobs - System"
      ]
    },
    {
      "cells": [
        "sales manager",
        "Fleet",
        "Vehicles",
        "All - Car - Entities - System - Car - Entities - System"
      ]
    },
    {
      "cells": [
        "sales manager",
        "Fleet",
        "Vehicles Model",
        "All - Vehicles Model - Entities - System - Car - Entities - System"
      ]
    },
    {
      "cells": [
        "sales manager",
        "Customers",
        "Accounts",
        "All - Accounts - Customers"
      ]
    },
    {
      "cells": [
        "sales manager",
        "Customers",
        "Contacts",
        "All - Contacts - Customers"
      ]
    },
    {
      "cells": [
        "sales manager",
        "Activities",
        "Calendar Events",
        "All - Calendar Events - Activities"
      ]
    },
    {
      "cells": [
        "sales manager",
        "System",
        "Jobs",
        "All - Jobs - System"
      ]
    },
    {
      "cells": [
        "store manager",
        "Fleet",
        "Vehicles",
        "All - Car - Entities - System - Car - Entities - System"
      ]
    },
    {
      "cells": [
        "store manager",
        "Fleet",
        "Vehicles Model",
        "All - Vehicles Model - Entities - System - Car - Entities - System"
      ]
    },
    {
      "cells": [
        "store manager",
        "Customers",
        "Accounts",
        "All - Accounts - Customers"
      ]
    },
    {
      "cells": [
        "store manager",
        "Customers",
        "Contacts",
        "All - Contacts - Customers"
      ]
    },
    {
      "cells": [
        "store manager",
        "Activities",
        "Calendar Events",
        "All - Calendar Events - Activities"
      ]
    },
    {
      "cells": [
        "store manager",
        "System",
        "Jobs",
        "All - Jobs - System"
      ]
    },
    {
      "cells": [
        "store manager",
        "System",
        "Menus",
        "All - Menus - System"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login with different users driver",
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
  "name": "the user navigates \"Fleet\" \"Vehicles Model\"",
  "keyword": "When "
});
formatter.match({
  "location": "NavigateStepDefinition.the_user_navigates(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title should contains \"Vehicles Model - Entities - System - Car - Entities - System\"",
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
  "name": "Login with different users driver",
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
formatter.scenario({
  "name": "Login with different users driver",
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
  "name": "the user navigates \"Customers\" \"Contacts\"",
  "keyword": "When "
});
formatter.match({
  "location": "NavigateStepDefinition.the_user_navigates(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title should contains \"Contacts - Customers\"",
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
  "name": "Login with different users driver",
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
  "name": "Login with different users driver",
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
  "name": "the user navigates \"System\" \"Jobs\"",
  "keyword": "When "
});
formatter.match({
  "location": "NavigateStepDefinition.the_user_navigates(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title should contains \"Jobs - System\"",
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
  "name": "Login with different users sales manager",
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
  "name": "the user navigates \"Fleet\" \"Vehicles\"",
  "keyword": "When "
});
formatter.match({
  "location": "NavigateStepDefinition.the_user_navigates(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title should contains \"All - Car - Entities - System - Car - Entities - System\"",
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
  "name": "Login with different users sales manager",
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
  "name": "the user navigates \"Fleet\" \"Vehicles Model\"",
  "keyword": "When "
});
formatter.match({
  "location": "NavigateStepDefinition.the_user_navigates(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title should contains \"All - Vehicles Model - Entities - System - Car - Entities - System\"",
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
  "name": "Login with different users sales manager",
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
  "name": "the title should contains \"All - Accounts - Customers\"",
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
  "name": "Login with different users sales manager",
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
  "name": "the user navigates \"Customers\" \"Contacts\"",
  "keyword": "When "
});
formatter.match({
  "location": "NavigateStepDefinition.the_user_navigates(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title should contains \"All - Contacts - Customers\"",
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
  "name": "Login with different users sales manager",
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
  "name": "the title should contains \"All - Calendar Events - Activities\"",
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
  "name": "Login with different users sales manager",
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
  "name": "the user navigates \"System\" \"Jobs\"",
  "keyword": "When "
});
formatter.match({
  "location": "NavigateStepDefinition.the_user_navigates(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title should contains \"All - Jobs - System\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.the_title_should_contains(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: Actual title:Dashboard\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat com.vytrack.step_definitions.LoginStepDefinition.the_title_should_contains(LoginStepDefinition.java:71)\r\n\tat ✽.the title should contains \"All - Jobs - System\"(file:src/test/resources/features/AccountTypes.feature:22)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with different users store manager",
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
  "name": "the user navigates \"Fleet\" \"Vehicles\"",
  "keyword": "When "
});
formatter.match({
  "location": "NavigateStepDefinition.the_user_navigates(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title should contains \"All - Car - Entities - System - Car - Entities - System\"",
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
  "name": "Login with different users store manager",
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
  "name": "the user navigates \"Fleet\" \"Vehicles Model\"",
  "keyword": "When "
});
formatter.match({
  "location": "NavigateStepDefinition.the_user_navigates(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title should contains \"All - Vehicles Model - Entities - System - Car - Entities - System\"",
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
  "name": "Login with different users store manager",
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
  "name": "the title should contains \"All - Accounts - Customers\"",
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
  "name": "Login with different users store manager",
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
  "keyword": "When "
});
formatter.match({
  "location": "NavigateStepDefinition.the_user_navigates(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title should contains \"All - Contacts - Customers\"",
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
  "name": "Login with different users store manager",
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
  "name": "the title should contains \"All - Calendar Events - Activities\"",
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
  "name": "Login with different users store manager",
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
  "name": "the user navigates \"System\" \"Jobs\"",
  "keyword": "When "
});
formatter.match({
  "location": "NavigateStepDefinition.the_user_navigates(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title should contains \"All - Jobs - System\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.the_title_should_contains(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: Actual title:Dashboard\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat com.vytrack.step_definitions.LoginStepDefinition.the_title_should_contains(LoginStepDefinition.java:71)\r\n\tat ✽.the title should contains \"All - Jobs - System\"(file:src/test/resources/features/AccountTypes.feature:22)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with different users store manager",
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
  "name": "the user navigates \"System\" \"Menus\"",
  "keyword": "When "
});
formatter.match({
  "location": "NavigateStepDefinition.the_user_navigates(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title should contains \"All - Menus - System\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.the_title_should_contains(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: Actual title:Dashboard\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat com.vytrack.step_definitions.LoginStepDefinition.the_title_should_contains(LoginStepDefinition.java:71)\r\n\tat ✽.the title should contains \"All - Menus - System\"(file:src/test/resources/features/AccountTypes.feature:22)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
});