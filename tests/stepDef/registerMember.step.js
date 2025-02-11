const { Given, When, Then } = require('@cucumber/cucumber')
const { DocumentsRequirePage } = require('../pageobjects/documentsrequire.page.js')
const testData = require('../data/testData.json')

const documentsrequirePage = new DocumentsRequirePage()

When('the user fill the form with valid details', { timeout: -1 }, async () => {
  const dataTable = await Object.assign({}, testData)
  await documentsrequirePage.submitFormBasicDetails(dataTable.salutation, dataTable.firstName, dataTable.lastName, dataTable.dateOfBirth, dataTable.email, dataTable.mobilePhoneNumber)
})

Then('the user should be navigated to next page succesfully', { timeout: -1 }, async () => {
  await documentsrequirePage.validateMoreInformationPage()
})

When(/^the user fill the form without "(.*)" mandatory field & click submit$/, { timeout: -1 }, async (attribute) => {
  const dataTable = await Object.assign({}, testData)
  dataTable[attribute] = ''
  await documentsrequirePage.submitFormBasicDetails(dataTable.salutation, dataTable.firstName, dataTable.lastName, dataTable.dateOfBirth, dataTable.email, dataTable.mobilePhoneNumber)
})

Then(/^the application should display the following "(.*)" error message$/, { timeout: -1 }, async (errorMessage) => {
  await documentsrequirePage.validateErrorMessage(errorMessage)
})
