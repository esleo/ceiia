class NewsPage {

    visit() {
        cy.visit('/news');
    }

    get newsCards() { return cy.get('.media-list-item'); }
    get cardTitleSelector() { return '.news-list-item-title'; }

    getCardImage($card) { return cy.wrap($card).find('.news-list-item-image img'); }
    getCardTitle($card) { return cy.wrap($card).find('.news-list-item-title'); }
    getCardDate($card) { return cy.wrap($card).find('.news-list-item-text'); }

    get detailTitle() { return cy.get('h1.media-detail-title'); }
}

export default new NewsPage();