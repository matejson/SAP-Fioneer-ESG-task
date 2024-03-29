
# SAP Fioneer ESG recruitment task

  

Welcome to my SAP Fioneer ESG recruitment task. In this task, tests are automated by using Playwright with TypeScript. Follow the instructions below to set up and use the project efficiently.

  

## Getting Started

  

To download the project via SSH, run the following command:

  

```bash
git  clone  git@github.com:matejson/SAP-Fioneer-ESG-task.git
```
## Dependencies

In the process of test creation, npm was the designated package manager, shaping the documentation accordingly. However, feel free to use your preferred package manager such as Yarn or others. To install dependencies, run:
```bash
npm  install
```

### Running  Tests

Use  the  following  command  to  run  tests  on  all  major  browser  engines (Chrome, Firefox,  and  WebKit) and generate an HTML report:

```bash
npm  run  test
```
### Additional  Test  Commands

#### To  run  tests  in  Chrome:
```bash
npm  run  test:chrome
```
#### To  run  tests  in  Firefox:

```bash
npm  run  test:firefox
```
#### To  run  tests  in  WebKit:

  
  
```bash
npm  run  test:webkit
```
#### Debugging  Tests

To  debug  tests,  use  the  following  command:

  
  
```bash
npm  run  debug
```
#### Generating  Report

After  running  tests,  an  HTML  report  is  automatically  generated.  If  the  report  doesn't open automatically, you can open it manually using:
```bash
npm run show-report
```
  

## Notes

Tests are executed with 2 workers by default.

Feel free to review and adapt the provided scripts according to your requirements.