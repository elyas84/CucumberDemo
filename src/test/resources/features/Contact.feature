Feature: Contact page

  @wip
  Scenario: Default page number
    Given the user is on the login page
    And the user enter the sales manager information
    When the user navigates "Customers" "Contacts"
    Then default page number should be 1


    Scenario: Menu options
      Given the user logged in as a "driver"
       Then the user should see following menu options
      | Fleet     | Customers  | Activities | System     |


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








