class HomePage {
    constructor() {
        this.AmexLogo = `(//img[@alt='American Express'])[1]`
        this.url = `https://www.americanexpress.com/fr-fr/?inav=NavLogo`
        this.DeclineCookie = `//button[text()='Tout Refuser']`
        this.CartesAmericanExpress = `//p[contains(text(),'Cartes American Express')]`
        this.enSaviourPlus = `//*[@title='Carte Gold American Express']/../../following-sibling::div//a//span[text()='En savoir plus']`
        this.demandezVotreCarte = `(//*[text()='Demandez votre Carte'])[1]`
    }

    async launchURL() {
        await page.goto(this.url)
        await expect(page).toHaveTitle(/American Express FR : Cartes de Paiement & Services Privilégiés/)
    }

    async validateHomepage() {
        await expect(await page.locator(this.AmexLogo)).toBeVisible()
    }

    async clickToutRefuser() {
        await page.waitForSelector(`//button[text()='Tout Refuser']`)
        await page.click(this.DeclineCookie)
    }

    async clickCartesAmericanExpressProduct() {
        await this.clickToutRefuser()
        await expect(await page.locator(`//*[contains(text(),'Cartes American Express')]`)).toBeVisible()
        await page.click(this.CartesAmericanExpress)
    }

    async clickEnSaviourPlusButton() {
        await this.clickToutRefuser()
        await expect(await page.locator(`//*[text()='Cartes American Express']`)).toBeVisible()
        await page.click(this.enSaviourPlus)
    }

    async clickDemandezVotreCarte() {
        await expect(await page.locator(`//*[text()='Elle Assure et vous Rassure']`)).toBeVisible()
        await page.click(this.demandezVotreCarte)
        await page.waitForTimeout(2000)
        await expect(await page.locator(`//*[text()='Souscrivez en quelques minutes']`)).toBeVisible()
    }
}

module.exports = { HomePage }