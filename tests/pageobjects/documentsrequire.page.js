class DocumentsRequirePage {
  constructor() {
    this.moreInformationText = `//h2[text()='Vos informations personnelles']`
    this.genericErrorMessage = `//span[@class='text-align-center']`
  }

  async populateField(attribute, value) {
    await page.waitForSelector(`//input[@id='fieldControl-input-${attribute}']`)
    await page.fill(`//input[@id='fieldControl-input-${attribute}']`, value)
  }

  async submitFormBasicDetails(salutation, FName, LName, DOB, Email, contactNumber) {
    await page.waitForTimeout(3000)
    if (salutation == 'MR' || salutation == 'MS') {
      await page.click(`//input[@id='${salutation}']/following-sibling::label`)
    }
    await this.populateField('firstName', FName)
    await this.populateField('lastName', LName)
    await this.populateField('dateOfBirth', DOB)
    await this.populateField('email', Email)
    await this.populateField('mobilePhoneNumber', contactNumber)
    await this.clickSubmitButton()
  }

  async clickSubmitButton() {
    await page.click("//button[@type='submit']")
  }

  async validateMoreInformationPage() {
    await page.waitForSelector(this.moreInformationText)
    await expect(await page.locator(this.moreInformationText)).toBeVisible()
  }

  async validateErrorMessage(errorMessage) {
    await page.waitForSelector(`//div[contains(text(),'${errorMessage}')]`)
    await expect(page.locator(`//div[contains(text(),'${errorMessage}')]`)).toBeVisible()
    await expect(page.locator(this.genericErrorMessage)).toBeVisible()
  }
}

module.exports = { DocumentsRequirePage }

