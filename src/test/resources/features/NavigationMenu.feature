@smoke
Feature: Navigation menu

 Scenario: Fleet-->Vehicle
   Given the user in the login page
   And the user enter the sales manager information
   When the user navigate to fleet, Vehicle
   Then the url should be expected Fleet url



   Scenario: Marketing--> Campaigns
       Given the user in the login page
       And the user enter the sales manager information
       When the user navigate to Marketing Company
       Then the url should be expected Company url



     Scenario: Activities—> Calendar Events
       Given the user in the login page
       And the user enter the sales manager information
       When the user navigate to Activities to Calendar page
       Then the url should be expected Calendar url


