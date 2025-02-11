Feature: Register a user for "CARTE GOLD AMERICAN EXPRESS"

    As a user launch AMEX Cards homepage
    Populate necessary fields to register a user
    User should sucessfully able to submit the application

    Scenario: Validate the Homepage launched
        Given Launch the Amex Cards Homepage & Homepage should be launched successfully
        Then User navigates to submit form for Cartes American Express
        When the user fill the form with valid details
        Then the user should be navigated to next page succesfully