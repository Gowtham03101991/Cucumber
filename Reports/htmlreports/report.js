$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/featurefile/forgetpass.feature");
formatter.feature({
  "name": "To validate forgetten password functionallity in fb",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@allscenerio"
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "    To validate forget password using phonenumber",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@allscenerio"
    }
  ]
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Response code 500. Message: chrome not reachable\nBuild info: version: \u00274.1.0\u0027, revision: \u002787802e897b\u0027\nSystem info: host: \u0027LAPTOP-4D3FGCJ9\u0027, ip: \u0027192.168.43.199\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_311\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [null, newSession {capabilities\u003d[Capabilities {browserName: chrome, goog:chromeOptions: {args: [], extensions: []}}], desiredCapabilities\u003dCapabilities {browserName: chrome, goog:chromeOptions: {args: [], extensions: []}}}]\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:84)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:62)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:156)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:246)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:168)\r\n\tat org.openqa.selenium.chromium.ChromiumDriver.\u003cinit\u003e(ChromiumDriver.java:108)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:104)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:91)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:46)\r\n\tat org.base.FbBaseclass.browserlaunch(FbBaseclass.java:25)\r\n\tat org.step.Hooks.befsec1(Hooks.java:18)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:42)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user have to enter fb login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdef.user_have_to_enter_fb_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click forget password button",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdef.click_forget_password_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enter phone number",
  "rows": [
    {
      "cells": [
        "9952033655",
        "123456789",
        "987654322",
        "00000000000",
        "1111111111"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Stepdef.enter_phone_number(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click search button",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdef.click_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Navigate to reset page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdef.navigate_to_reset_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat org.step.Hooks.aftsec1(Hooks.java:38)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.uri("file:src/test/resources/featurefile/samfeature.feature");
formatter.feature({
  "name": "To validate login functionality of fb",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@allscenerio"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user have to enter fb login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdef.user_have_to_enter_fb_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "To validate login by valid email invalid password",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@allscenerio"
    }
  ]
});
formatter.step({
  "name": "user have to maximize the screen",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdef.user_have_to_maximize_the_screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user have to enter valid email and invalid password",
  "rows": [
    {
      "cells": [
        "123@gamil.com",
        "11111111",
        "321@gamil.com",
        "00000000"
      ]
    },
    {
      "cells": [
        "000@gmail.com",
        "2222222",
        "111@gmail.com",
        "22222222"
      ]
    },
    {
      "cells": [
        "3333@gmail.com",
        "33333333",
        "444@gmail.com",
        "1111111"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Stepdef.user_have_to_enter_valid_email_and_invalid_password(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "use have to click login button",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdef.use_have_to_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user have to enter invalid credentails page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdef.user_have_to_enter_invalid_credentails_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user have to enter fb login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdef.user_have_to_enter_fb_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "To validate login by invalid email invalid password",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@allscenerio"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user have to maximize the screen",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdef.user_have_to_maximize_the_screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user have to enter invalid email and invalid password",
  "rows": [
    {
      "cells": [
        "user",
        "onedim@map.com"
      ]
    },
    {
      "cells": [
        "pass",
        "12345"
      ]
    },
    {
      "cells": [
        "email",
        "1map@greens.com"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Stepdef.user_have_to_enter_invalid_email_and_invalid_password(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "use have to click login button",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdef.use_have_to_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user have to enter invalid credentails page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdef.user_have_to_enter_invalid_credentails_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user have to enter fb login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdef.user_have_to_enter_fb_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "To validate login by valid email old password",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@allscenerio"
    }
  ]
});
formatter.step({
  "name": "user have to maximize the screen",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdef.user_have_to_maximize_the_screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user have to enter valid email and old password",
  "rows": [
    {
      "cells": [
        "user",
        "pass",
        "phoneno"
      ]
    },
    {
      "cells": [
        "u1",
        "twomap1@map.com",
        "12345667"
      ]
    },
    {
      "cells": [
        "u2",
        "twomap2@map.com",
        "09876544"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Stepdef.user_have_to_enter_valid_email_and_old_password(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "use have to click login button",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdef.use_have_to_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user have to enter invalid credentails page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdef.user_have_to_enter_invalid_credentails_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
});