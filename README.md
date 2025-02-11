# e2e-test-automation

## Table of Contents

1. [Introduction](#1-introduction)
2. [Prerequisites](#2-prerequisites)
3. [Framework Setup](#3-framework-setup)
4. [Run Test Scripts](#4-run-test-scripts)
5. [Creating New Tests](#5-creating-new-tests)
6. [Reports](#6-reports)
7. [Logging](#8-logging)


## 1. Introduction

E2E Framework is developed using **WebdriverIO-Typescript**. 

WebdriverIO is a progressive automation framework built to automate modern web and mobile applications. It simplifies the interaction with your app and provides a set of plugins that help you create a scalable, robust and stable test suite. It is using cucumber gherkin feature file for test data and performing actions in the application.

Current framework is designed to test both Kiosk application as well amplication web app testing with many resusable fucntions.


## 2. Prerequisites
### 2.1. Tools/Software

1. Git (https://git-scm.com/downloads) 
2. GitBash(auto installed with #1) / GitHub Desktop (as per your convenience) (GitHub Desktop )
3. NodeJS LTS version (https://nodejs.org/en/download/)
4. Access to WAWA Organisation in GitHub to clone repositories (Wawa)
5. VS Code – Visual studio code should be installed.(https://code.visualstudio.com/download )


## 3. Framework Setup
1. Clone this repository - https://github.com/wawa/e2e-test-automation
2. Navigate to cloned repository root director in terminal and run “npm install”. After successful installation, "node_modules" folder will get generated in folder structure.
3. Make sure your local browser version and chromer driver version("chromedriver -v" in cmd) is same


## 4. Run Test Scripts - Non Kiosk
### 1. Local run
1. Navigate to web-e2e-automation folder under repository directory in terminal.  


2. For Web
   Selection of browser - Using the capabilities parameter in the wdio.conf.web.local.ts file the browser can be selected and add the respective tag name to be executed.
   To run - In terminal in root directory type - yarn run wdioweb click enter
   Specify the path to spec file that you want to run in   - specs: ['./features/E2E/Disclaimer/Disclaimer-Create.feature',] 

3. For Kiosk
   Selection of browser - Provide kiosk app path in the capabilities parameter in the wdio.conf.lab.tes file and add the respective tag name to be executed.
   To run - In terminal in root directory type - yarn run wdioweb click enter
   Specify the path to spec file that you want to run in   - specs: ['./features/E2E/Disclaimer/Disclaimer-Validate.feature',]
   

## 5. Creating New Tests
1. Test Data  
    i. The test data for the scripts is placed inside feature files under Examples
      
    Examples:
     | categoryName          | folderName      |    SSImgName     | SSName           | categoryName1                     | menuTree1                           |
     | Web Content           | Screensavers    | Cloud-9151-manual   | Screensaver Auto | Menu Channel Assignment (Content) |  Full Order Menu Channel Assignment |
   
    ii. In feature file specfic tag cateogory is added like @smoke, @regression, @TC001, @Badgecreate
        These tags are used in the configuration file to execute specific module.
   
3. i.   The page objects are added inside page objects folder
   ii.  The step definitions are added inside step defination folder
   iii. Sanity test scripts are placed inside "sanity" folder
   
4. To run the script 
   Run the script using the command npm run qalocal(For local run) or npm run qacbt(For crossbrowsertesting run) 

=======
2. Selection of browser
       Using the capabilities parameter in the wdio.conf.local file the browser can be selected
3. Terminal  
        i. To run specific tests in QA /DEV environment  
           npm run qalocal  
           npm run devlocal  
           Specify the path to spec file that you want to run in  
           specs: ['./test/specs/smoke/smoke-delivery-flow.spec.ts'],  
        ii. To run all tests  
           specs: ['./test/specs/**/*.spec.ts'],

## 6. Reports
1. allure reporter is used for Webdriver.io Automation Framework.
2. Once you run the test run below command to open. 
   allure open  
 **Note: If allure reporter is not auto generated use the command**  
          1.allure generate ./E2E_Reports/report –clean  
          2.allure open

## 6. Infrastructure

| Software       | Version | Comment(s)                                  |
|:---------------|:--------|:--------------------------------------------|
| node    | 18.15.0+     |                             |
| Webdriverio | 8+     |  |
| Allure reporter | 8.11.0+ |                                             |




