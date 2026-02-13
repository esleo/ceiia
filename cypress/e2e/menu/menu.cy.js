import MenuPage from '../../support/page_objects/MenuPage';

describe('Navigation Menu (Hamburger)', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should open and close the menu', () => {

        cy.get('body').should('be.visible');

        MenuPage.open();
        MenuPage.menuContainer.should('have.class', 'menu-active');

        const itemsToVerify = ['Home', 'Markets', 'Products', 'Our World', 'News', 'Careers', 'Contact Us'];

        itemsToVerify.forEach(item => {
            MenuPage.verifyMenuItemVisible(item);
        });

        MenuPage.close();
        MenuPage.menuContainer.should('not.have.class', 'menu-active');
    });
});