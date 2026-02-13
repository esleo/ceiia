import MarketsPage from '../../support/page_objects/MarketsPage';

describe('Markets Accordion Behavior', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should expand a market item and collapse the previous one', () => {

    MarketsPage.getMarketItem('mobility').should('have.class', 'active');
    MarketsPage.getMarketItem('space').should('not.have.class', 'active');

    MarketsPage.expandMarket('space');
    MarketsPage.getMarketItem('space').should('have.class', 'active');
    MarketsPage.getExploreButton('space').should('be.visible');

    MarketsPage.getMarketItem('mobility').should('not.have.class', 'active');
    MarketsPage.getExploreButton('mobility').should('not.be.visible');
  });

  it('should verify all market segments are present', () => {
    const segments = ['mobility', 'aeronautics', 'space', 'others'];
    
    segments.forEach(segment => {
      MarketsPage.getMarketItem(segment).should('exist');
    });
  });
});