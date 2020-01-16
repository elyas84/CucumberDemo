@login
Feature: User should be able to login
  @driver @VYT-123
  Scenario: Login as a driver
    Given the user ins in the login page
    When the users enter the driver information
    Then  the user should be able to login

    #commnents sign

  @sales_manager
  Scenario: Login as a sales manager
    Given the user ins in the login page
    When the user enter the sales manager information
    Then the user should be able to login

    # Inside this file we have scenarios and steps like Give, Then When

  @store_manager @VYT-123 @wip
    Scenario: Login as a store manager
      Given  the user ins in the login page
      When the user enter the store manager information
      Then  the user should be able to login