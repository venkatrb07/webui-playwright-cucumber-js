import { test, expect } from '@playwright/test';
import { verifyIsDisplayed } from '../Utils/assertions';
import HomePage from '../tests/pageobjects/homepage.page.js'

test.only('Validate AMEX Homepage launch', async ({ page }) => {
  await HomePage.open(page);
  await HomePage.validateHomepage();
  await page.locator(`//button[text()='Tout Refuser']`).click()
  await verifyIsDisplayed(`//*[contains(text(),'Cartes American Express')]`, "Cartes Americal Express Category")
  await page.locator(`//*[contains(text(),'Cartes American Express')]`).click()
  await verifyIsDisplayed(`//*[text()='Cartes American Express']`, "Cartes American Express Page")
  await page.locator(`(//*[text()='En savoir plus'])[2]`).click()
  await verifyIsDisplayed(`//*[text()='Elle Assure et vous Rassure']`, "Elle Assure et vous Rassure")

})
