export function getDownloadedFileName(alias: string) {
    cy.task('getDownloadedFileName', null).then((fileName) => {
        cy.wrap(fileName).should("not.contain", "TIMEOUT").then((fileName) => {
            cy.wrap(fileName).as(alias);
        });
    });
}