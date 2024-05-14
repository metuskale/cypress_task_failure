This is a simple example to reproduce the error

 CypressError: `cy.screenshot()` timed out waiting `30000ms` to complete.
      at https://github.com/__cypress/runner/cypress_runner.js:134857:73
      at tryCatcher (https://github.com/__cypress/runner/cypress_runner.js:1807:23)
      at https://github.com/__cypress/runner/cypress_runner.js:4186:41
      at tryCatcher (https://github.com/__cypress/runner/cypress_runner.js:1807:23)
      at Promise._settlePromiseFromHandler (https://github.com/__cypress/runner/cypress_runner.js:1519:31)
      at Promise._settlePromise (https://github.com/__cypress/runner/cypress_runner.js:1576:18)
      at Promise._settlePromise0 (https://github.com/__cypress/runner/cypress_runner.js:1621:10)
      at Promise._settlePromises (https://github.com/__cypress/runner/cypress_runner.js:1697:18)
      at _drainQueueStep (https://github.com/__cypress/runner/cypress_runner.js:2407:12)
      at _drainQueue (https://github.com/__cypress/runner/cypress_runner.js:2400:9)
      at Async._drainQueues (https://github.com/__cypress/runner/cypress_runner.js:2416:5)
      at Async.drainQueues (https://github.com/__cypress/runner/cypress_runner.js:2286:14)

  2) CJIT Validation without background
       "after each" hook for "01 - Test":
     CypressError: `cy.task('cypress-cucumber-preprocessor:test-step-finished')` timed out after waiting `30000ms`.

https://on.cypress.io/api/task

Because this error occurred during a `after each` hook we are skipping the remaining tests in the current suite: `CJIT Validation without bac...`
      at <unknown> (https://github.com/__cypress/runner/cypress_runner.js:135761:70)
      at tryCatcher (https://github.com/__cypress/runner/cypress_runner.js:1807:23)
      at <unknown> (https://github.com/__cypress/runner/cypress_runner.js:4186:41)
      at tryCatcher (https://github.com/__cypress/runner/cypress_runner.js:1807:23)
      at Promise._settlePromiseFromHandler (https://github.com/__cypress/runner/cypress_runner.js:1519:31)
      at Promise._settlePromise (https://github.com/__cypress/runner/cypress_runner.js:1576:18)
      at Promise._settlePromise0 (https://github.com/__cypress/runner/cypress_runner.js:1621:10)
      at Promise._settlePromises (https://github.com/__cypress/runner/cypress_runner.js:1697:18)
      at _drainQueueStep (https://github.com/__cypress/runner/cypress_runner.js:2407:12)
      at _drainQueue (https://github.com/__cypress/runner/cypress_runner.js:2400:9)
      at Async._drainQueues (https://github.com/__cypress/runner/cypress_runner.js:2416:5)
      at Async.drainQueues (https://github.com/__cypress/runner/cypress_runner.js:2286:14)
  From Your Spec Code:
      at taskTestStepFinished (node_modules/@badeball/cypress-cucumber-preprocessor/dist/browser-runtime.js:94:0)
      at Context.afterEachHandler (node_modules/@badeball/cypress-cucumber-preprocessor/dist/browser-runtime.js:556:0)
      at Context.eval (node_modules/@badeball/cypress-cucumber-preprocessor/dist/browser-runtime.js:157:0)



An error was thrown in your plugins file while executing the handler for the after:spec event.

The error we received was:

Error: Unexpected state in afterSpecHandler: step-finished (this might be a bug, please report at https://github.com/badeball/cypress-cucumber-preprocessor)
    at createError (C:\Users\U6073228\projects\test-cypress\node_modules\@badeball\cypress-cucumber-preprocessor\dist\helpers\error.js:9:12)
    at afterSpecHandler (C:\Users\U6073228\projects\test-cypress\node_modules\@badeball\cypress-cucumber-preprocessor\dist\plugin-event-handlers.js:300:43)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
