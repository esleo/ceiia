import SliderPage from '../../support/page_objects/SliderPage';

describe('Homepage Hero Slider', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should navigate through slides and change content', () => {
    SliderPage.slideHeading.then(($element) => {
      const firstTitle = $element.text();

      SliderPage.clickNext();
      cy.wait(2100); 
      SliderPage.slideHeading.should(($newElement) => {
        expect($newElement.text()).to.not.equal(firstTitle);
      });
    });
  });

  it('should go to the last slide and back to the first', () => {
    SliderPage.slideHeading.invoke('text').then((initialText) => {
      
      SliderPage.clickPrev();
      cy.wait(2100);
      SliderPage.slideHeading.invoke('text').should('not.equal', initialText);
      SliderPage.clickNext();
      cy.wait(2100);
      SliderPage.slideHeading.invoke('text').should('equal', initialText);
    });
  });
});