Feature: CJIT Validation without background

    Scenario: 01 - Test
        Given open git website is opened
        When we wait for a file download that never happens
        Then the downloaded filename should not equal TIMEOUT

    Scenario: 02 - Test
        Given open git website is opened
        Then this will never be executed