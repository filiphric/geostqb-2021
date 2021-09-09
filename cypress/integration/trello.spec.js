
it('trello app', function() {
  cy.visit('http://localhost:3000');

  // create a board
  cy.get('[data-cy=create-board] > .text-white').click();
  cy.get('[data-cy=new-board-input]').clear();
  cy.get('[data-cy=new-board-input]').type('new board{enter}');

  // add a new list
  cy.get('[data-cy=add-list-input]').clear();
  cy.get('[data-cy=add-list-input]').type('new list{enter}');
  cy.get('[data-cy=list]').should('be.visible');

  // add a new card
  cy.get('[data-cy=new-card]').click();
  cy.get('[data-cy=new-card-input]').type('new card{enter}')
  cy.get('.text-center').click();

  // check the checkbox
  cy.get('[data-cy=card-checkbox]').check();
  cy.get('[data-cy=card-checkbox]').should('be.checked');
  cy.get('[data-cy=card-date]').should('have.class', 'completed');

});
