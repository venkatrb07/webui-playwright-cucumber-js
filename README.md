# e2e-test-automation

## Table of Contents

1. [Introduction](#1-introduction)
2. [Prerequisites](#2-prerequisites)
3. [Framework Setup](#3-framework-setup)
4. [Run Test Scripts](#4-run-test-scripts)
5. [Creating New Tests](#5-creating-new-tests)
6. [Reports](#6-reports)
7. [Infrastructure](#8-infrastructure)

## 1. Introduction

This Framework is developed using **Playwright-Cucumber-JS**.

Playwright is an open-source test automation tool backed by Microsoft. Playwright supports integration with many tools such as Cucumber, Jenkins, Jira, and Cloud Integration with BrowserStack

Playwright is a progressive automation framework built to automate modern web and mobile applications. It simplifies the interaction with your app and provides a set of plugins that help you create a scalable, robust and stable test suite. It is using cucumber gherkin feature file for test data and performing actions in the application.

Using Playwright with Cucumber makes the framework simpler, more efficient, and readable, as it can use the power of both Playwright and Cucumber. Playwright provides advanced automation capability by supporting the most advanced React, Angular, VueJS, etc. development frameworks.

On the other hand, Cucumber provides abstraction by hiding all coding complexity. Testers can write the test cases in plain English like language, and non-technical stakeholders can easily understand the test reports.

It also accelerates the automation encouraging non-technical team members to contribute to the automation. Manual testers can easily learn and perform test automation. Understand how to set up the Playwright Cucumber framework with the following step-by-step guide.

## 2. Prerequisites

### 2.1. Tools/Software

1. Git (https://git-scm.com/downloads)
2. GitBash(auto installed with #1) / GitHub Desktop (as per your convenience) (GitHub Desktop )
3. NodeJS LTS version (https://nodejs.org/en/download/)
4. VS Code – Visual studio code should be installed.(https://code.visualstudio.com/download )

## 3. Framework Setup

1. Clone this repository - [https://github.com/venkatrb07/webui-playwright-cucumber-js.git]
2. Navigate to cloned repository root director in terminal and run `npm install`. After successful installation, "node_modules" folder will get generated in folder structure.
3. Make sure your all dependecies with mentioned version installed correctly(`npx cucumber-js --version` in cmd)

## 4. Run Test Scripts

### 1. Local run

1. Navigate to root directory of project in terminal.
2. For Cucumber-js
   Selection of browser - Using the common parameter in the cucumber.js file and add the respective tag name to be executed.

   To run - In terminal in root directory type - `npm run cucumberTest`

   Specify the path to features that you want to run in   - ['tests/**/*.feature']

## 5. Creating New Tests

1. Test Data  
   i. The test data for the scripts is placed inside feature files under Examples

   Examples:
   | categoryName          | folderName      |    SSImgName     | SSName           | categoryName1                     | menuTree1                           |
   | Web Content           | Screensavers    | Cloud-9151-manual   | Screensaver Auto | Menu Channel Assignment (Content) |  Full Order Menu Channel Assignment |

   ii. In feature file specfic tag cateogory is added like @smoke, @regression, @TC001, @Badgecreate
   These tags are used in the configuration file to execute specific module.

2. i.   The page objects are added inside tests/pageobjects folder
   ii.  The step definitions are added inside tests/stepDef folder
   iii. The feature files are added inside tests/features folder

## 6. Reports

1. cucumber-html-reporter is used for Playwright-Cucumber-js Framework.
2. Once you run the test run below command to open.
   
   `npm run cucumberReport`

## 7. Infrastructure

| Software       | Version | Comment(s)                                  |
|:---------------|:--------|:--------------------------------------------|
| node    | 20.11.0+     |                             |
| Playwright | 10.2.4+     |  |
| Cucumber-Html-reporter | 10.2.4+ |                                             |




