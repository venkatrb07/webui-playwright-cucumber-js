const playwright = require('playwright')
const { Before, After, BeforeAll, AfterAll, AfterStep } = require('@cucumber/cucumber')
const { expect } = require('@playwright/test')
const fs  = require('fs')

// To launch the browser before all the scenarios
BeforeAll(async () => {
  console.log('Launch Browser')
  // Giving browser- Chromium and headed mode
  global.browser = await playwright['chromium'].launch({ headless: false })
  global.expect = await expect
})

// To close the browser after all the scenarios
AfterAll(async () => {
  console.log('Close Browser')
  await global.browser.close()
})

// Before every scenario, Create new context and page
Before(async () => {
  console.log('Create new context and page')
  global.context = await global.browser.newContext()
  global.page = await global.context.newPage()
})

// After every scenario, Close context and page
After(async (scenario) => {
  console.log('Close context and page')
  console.log(scenario.result.status)
  if (scenario.result.status === 'FAILED') {
    // Take a screenshot on failure
    const screenshotPath = `playwright/reports/screenshots/screenshot_on_failure_${scenario.pickle.name}.png`;
    await page.screenshot({ path: screenshotPath });
    console.log(`Screenshot taken: ${screenshotPath}`);
    // this.attach(fs.readFileSync(screenshotPath), 'image/png')
  }
  await global.page.close()
  await global.context.close()
})