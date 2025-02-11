Feature: Register a user for "CARTE GOLD AMERICAN EXPRESS"

    As a user launch AMEX Cards homepage
    Populate necessary fields to register a user
    User should sucessfully able to submit the application

    Scenario: Validate the Basic user details filled for Cartes American Express Product
        Given Launch the Amex Cards Homepage & Homepage should be launched successfully
        Then User navigates to submit form for Cartes American Express
        When the user fill the form with valid details
        Then the user should be navigated to next page succesfully

    Scenario Outline: Validate the error message when "<Attribute>" missed in register form page for Cartes American Express Product
        Given Launch the Amex Cards Homepage & Homepage should be launched successfully
        Then User navigates to submit form for Cartes American Express
        When the user fill the form without "<Attribute>" mandatory field & click submit
        Then the application should display the following "<ErrorMessage>" error message

        Examples:
            | Attribute         | ErrorMessage                                       |
            | dateOfBirth       | Vous devez avoir plus de 18 ans.                   |
            | firstName         | Prénom obligatoire.                                |
            | lastName          | Nom obligatoire.                                   |
            | email             | Merci de vérifier le format de votre adresse email |
            | mobilePhoneNumber | Téléphone mobile obligatoire en chiffres uniquemen |
            | salutation        | Merci de préciser votre civilité.                  |