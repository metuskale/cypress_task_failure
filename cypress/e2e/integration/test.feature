Feature: Validation without background

    Scenario: 01 - Test
        Given duck duck go website is opened
        When we search for "panda"
        Then the title should contain "panda"