class DocumentsRequirePage {
  constructor(){
    this.moreInformationText = `//h2[text()='Vos informations personnelles']`
  }
  async submitFormBasicDetails(FName, LName, DOB, Email, contactNumber) {
    await page.waitForTimeout(3000)
    await page.click(`//input[@id='MR']/following-sibling::label`)
    await this.populateField('firstName', FName)
    await this.populateField('lastName', LName)
    await this.populateField('dateOfBirth', DOB)
    await this.populateField('email', Email)
    await this.populateField('mobilePhoneNumber', contactNumber)
    await page.click("//button[@type='submit']")
  }

  async validateMoreInformationPage() {
    await page.waitForSelector(this.moreInformationText)
    await expect(await page.locator(this.moreInformationText)).toBeVisible()
  }

  async populateField(attribute, value) {
    await page.fill(`//input[@id='fieldControl-input-${attribute}']`, value)
  }
}

module.exports = { DocumentsRequirePage }

