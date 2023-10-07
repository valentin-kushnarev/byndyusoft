/// <reference types="cypress" />

describe('Checking the Contacts section', () => {
  let data;

  before(() => {
    cy.fixture('data.json').then((jsonData) => {
      data = jsonData;
    });
  });

  it('Check telegram-URL', function () {
    cy.visit(data.urls.googleUrl);
    cy.get(data.selectors.searchInput)
      .type(data.searchQueries.byndyusoft)
      .type('{enter}');
    cy.get(data.selectors.byndyusoftInSearch).invoke('removeAttr', 'target').click({ multiple: true });
    cy.url().should('eq', data.urls.byndyusoftUrl).then(() => {
      cy.visit(data.urls.byndyusoftUrl);
      cy.get(data.buttons.presentationButton).click();
      cy.get(data.buttons.telegramButton).should('have.attr', 'href', data.urls.telegramUrl);
    });
  });
});