// demo.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/* ==== Test Created with Cypress Studio ==== */
it('google search', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://google.com');
  cy.get('#L2AGLb > .jyfHyd').click();
  cy.get('.gLFyf').clear();
  cy.get('.gLFyf').type('geostqb{enter}');
  /* ==== End Cypress Studio ==== */
});
