
Feature: Contact page
  Scenario: Default page number
    Given the user is on the login page
    And the user enter the sales manager information
    When the user navigates "Customers" "Contacts"
    Then default page number should be 1


    Scenario: Menu options
      Given the user logged in as a "driver"
       Then the user should see following menu options
      | Fleet     | Customers  | Activities | System     |

@wip
   Scenario Outline: login as a given user
    Given the user is on the login page
    When the user  logs in using following credentials
    |username| <username>     |
    |password|  UserUser123   |
    |firstname| <firstname>   |
    |lastname| <lastname>     |
     Examples:

     |username        | firstname | lastname|
     |user1           | John      | Doe     |
     |salesmanager101 | Peyton    |  Harber |
     |storemanager85  | Marcella Bnmbnmbnm  |Huels|



     Scenario: contact test with email
       Given the user logged in as a "store manager"
       And the user navigates "Customers" "Contacts"
       When the user click the "mbrackstone9@example.com" from contact
       Then the information should be same with database


  Scenario: contact test with email
    Given the user logged in as a "store manager"
    And the user navigates "Customers" "Contacts"
    When the user click the "poohchi@bark.edu" from contact
    Then the information "poohchi@bark.edu" should be same with database












