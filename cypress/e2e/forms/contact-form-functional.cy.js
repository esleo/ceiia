import ContactPage from '../../support/page_objects/ContactPage';

describe('Contact Form - Functional', () => {
  beforeEach(() => {
    ContactPage.visit();
  });

  it('should fill the form successfully', () => {
    const userData = {
      name: 'QA Candidate',
      email: 'qa@test.com',
      phone: '912345678',
      message: 'Hello, this is a QA test!'
    };

    ContactPage.fillForm(userData);
    ContactPage.acceptTerms();
    ContactPage.submit();

    ContactPage.successMessage.should('be.visible').and('contain', 'Thank you! Your submission has been received!')
  });

  it('should display error message when server fails', () => {


    cy.intercept('POST', 'https://webflow.com/api/v1/form/65c4a07b1322f006ee7b2374', {
      statusCode: 500,
      body: { error: 'Internal Server Error' }
    }).as('getServerFailure');

    const userData = {
      name: 'QA Test Error',
      email: 'error@test.com',
      phone: '912345678',
      message: 'Testing failure message appearance.'
    };

    ContactPage.fillForm(userData);
    ContactPage.acceptTerms();
    ContactPage.submit();

    cy.wait('@getServerFailure');

    ContactPage.failMessage.should('be.visible').and('contain', 'Oops! Something went wrong');
  });

  it('should fail to submit with empty fields', () => {
    ContactPage.submit();

    ContactPage.nameInput.then(($el) => {
      expect($el[0].validationMessage).to.not.be.empty;
    });
  });
});