describe('Accessibility tests', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.injectAxe()
  });

  it('Homepage should have no detectable a11y violations', () => {
    cy.checkA11y(null, {
      includedImpacts: ['critical', 'serious']
    });
  });
});
