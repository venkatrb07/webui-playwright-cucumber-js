const { Given, Then, When } = require('@cucumber/cucumber');
const { HomePage } = require('../pageobjects/homepage.page.js')
const homepage = new HomePage();

Given("Launch the Amex Cards Homepage & Homepage should be launched successfully", { timeout: -1 }, async () => {
    await homepage.launchURL();
    await homepage.validateHomepage();
});

Then("User navigates to submit form for Cartes American Express", { timeout: -1 }, async () => {
    await homepage.clickCartesAmericanExpressProduct();
    await homepage.clickEnSaviourPlusButton();
    await homepage.clickDemandezVotreCarte();
});