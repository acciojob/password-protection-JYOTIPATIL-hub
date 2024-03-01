//your JS code here. If required.
() => {
  cy.get('input[type="password"]').should("have.attr", "placeholder", "*******");
}
