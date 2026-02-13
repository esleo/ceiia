class MarketsPage {

  get marketsList() { return cy.get('.markets-list'); }

  getMarketItem(name) { return cy.get(`.market-list-item.${name.toLowerCase()}`); }
  expandMarket(name) { this.getMarketItem(name).click(); }
  getExploreButton(name) { return this.getMarketItem(name).find('.market-list-item-btn'); }

}

export default new MarketsPage();