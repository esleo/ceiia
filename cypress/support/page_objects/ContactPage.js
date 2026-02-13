class ContactPage {

    visit() {
        cy.visit('/contacts');
    }

    get nameInput() { return cy.get('input[name="name"]'); }
    get emailInput() { return cy.get('input[name="Email"]'); }
    get phoneInput() { return cy.get('input[name="Phone"]'); }
    get messageInput() { return cy.get('textarea[name="Message"]'); }
    get privacyCheckbox() { return cy.get('input[name="Terms-and-Privacy"]'); }
    get submitBtn() { return cy.get('input[type="submit"]'); }

    fillForm(data) {
        if (data.name) this.nameInput.type(data.name);
        if (data.email) this.emailInput.type(data.email);
        if (data.phone) this.phoneInput.type(data.phone);
        if (data.message) this.messageInput.type(data.message);
    }

    acceptTerms() {
        this.privacyCheckbox.check({ force: true });
    }

    submit() {
        this.submitBtn.click();
    }

    get successMessage() { return cy.get('.w-form-done'); }

    get failMessage() { return cy.get('.w-form-fail'); }
}

export default new ContactPage();