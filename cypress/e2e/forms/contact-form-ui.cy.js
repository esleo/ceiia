import ContactPage from '../../support/page_objects/ContactPage';

describe('Contact Form - UI Validation', () => {
    beforeEach(() => {
        ContactPage.visit();
    });

    it('should display all required form fields', () => {
        
        cy.get('form').should('be.visible');
        ContactPage.nameInput.should('be.visible');
        ContactPage.emailInput.should('be.visible');
        ContactPage.phoneInput.should('be.visible');
        ContactPage.messageInput.should('be.visible');
        ContactPage.privacyCheckbox.should('exist').and('not.be.disabled');
        
        ContactPage.submitBtn.should('be.visible');
    });
});