class MenuPage {

    get openMenuBtn() {
        return cy.get('button.header-menu-btn').filter(':visible');
    }

    get closeMenuBtn() {
        return cy.get('.header-menu-right-bar button.header-menu-btn');
    }

    get menuContainer() { return cy.get('.header-menu'); }
    get menuList() { return cy.get('.header-menu-list'); }
    get langWrapper() { return cy.get('.header-menu-lang-wrapper'); }

    open() {
        this.openMenuBtn.should('have.length', 1).click();
    }

    close() {
        this.closeMenuBtn.should('be.visible').click();
    }

    verifyMenuItemVisible(text) {
        this.menuList.contains(text).should('be.visible');
    }

    switchLanguage(lang) {
        this.langWrapper.contains('a', lang).click();
    }

    checkActiveLang(lang) {
        this.langWrapper.contains('a', lang).should('have.class', 'active');
    }
}

export default new MenuPage();