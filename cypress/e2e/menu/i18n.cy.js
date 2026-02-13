import MenuPage from '../../support/page_objects/MenuPage';

describe('Localization Flow', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should switch from EN to PT via Sidebar Menu', () => {

    MenuPage.open();
    MenuPage.checkActiveLang('EN');
    MenuPage.switchLanguage('PT');
    MenuPage.open();
    MenuPage.checkActiveLang('PT');
    cy.get('.header-menu-list').should('contain', 'Carreiras'); 
  });
});