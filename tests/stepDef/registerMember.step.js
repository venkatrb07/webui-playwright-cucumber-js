const { Given, When, Then, defineStep } = require('@cucumber/cucumber')
const { DocumentsRequirePage } = require('../pageobjects/documentsrequire.page.js')

// Initializing the object (loginPage) of class (LoginPage)
const documentsrequirePage = new DocumentsRequirePage()

When('the user fill the form with valid details', { timeout: -1 }, async () => {
  //defineStep('I fill the form with valid details', async ()=> {
  await documentsrequirePage.submitFormBasicDetails("Quis", "Aime", "07/07/1996", "testuser@email.com", "0665065000")
})

Then('the user should be navigated to next page succesfully', { timeout: -1 }, async () => {
  //defineStep('the user should be navigated to next page succesfully', async ()=> {
  await documentsrequirePage.validateMoreInformationPage()
})
