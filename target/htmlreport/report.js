$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/sample1.feature");
formatter.feature({
  "name": "Login Test",
  "description": "Description: Registered user can login into application using valid username and valid password",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login with valid combination",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user opens login page in newtours application",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_opens_login_page_in_newtours_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the username as \"mercury\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enters the password as \"mercury\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "click on submit button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});