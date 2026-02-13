import NewsPage from '../../support/page_objects/NewsPage';

describe('News Page Validation', () => {
    beforeEach(() => {
        NewsPage.visit();
    });

    it('should validate all news cards', () => {
        NewsPage.newsCards.each(($card) => {
            NewsPage.getCardTitle($card).should('be.visible').and('not.be.empty');
            NewsPage.getCardDate($card).then(($date) => {
                if (!$date.hasClass('w-dyn-bind-empty')) {
                    cy.wrap($date).should('be.visible').and('not.be.empty');
                } else {
                    cy.wrap($date).should('not.be.visible');
                }
            });

            NewsPage.getCardImage($card).should('have.attr', 'src').and('not.be.empty');
        });
    });

    it('should navigate to the news detail when clicking a card', () => {
        NewsPage.newsCards.first().then(($card) => {
            const newsTitle = $card.find('.news-list-item-title').text().trim();
            cy.wrap($card).click();
            cy.url().should('include', '/news/');
            cy.get('h1').invoke('text').should('contain', newsTitle);
        });
    });

});