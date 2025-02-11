

// This is done to do the mapping for Assertions, Hooks and Step Definition files 
const common = `
    --require Utils/hooks.js
    --require tests/**/*.step.js
    --format json:playwright/reports/cucumber-html-reporter.json
  --format message:playwright/reports/cucumber-html-reporter.ndjson
  --format html:playwright/reports/report.html
  --format @cucumber/pretty-formatter
`

module.exports = {
    default: `${common} tests/**/*.feature`,
    format: [
        "allure-cucumberjs/reporter"
    ]
}