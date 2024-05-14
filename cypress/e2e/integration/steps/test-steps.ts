import {Given, Then, When} from "@badeball/cypress-cucumber-preprocessor";
import {getDownloadedFileName} from "../../../support/commands/utils";

Given(/^open git website is opened$/, function () {
    cy.visit('www.github.com')
});
When(/^we wait for a file download that never happens$/, function () {
    getDownloadedFileName('downloadedFilename');
});
Then(/^the downloaded filename should not equal TIMEOUT$/, function () {
    cy.get<string>('@downloadedFilename').then((fileName: string) => {
        cy.wrap(fileName).should('not.equal', "TIMEOUT");
    });
});
Then(/^this will never be executed$/, function () {
    cy.wrap('1').should("eq", "1");
});