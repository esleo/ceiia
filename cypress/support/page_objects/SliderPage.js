class SliderPage {

    get allSlides() { return cy.get('.w-slide'); }

    get activeSlide() { return cy.get('.w-slide').not('[aria-hidden="true"]'); }

    get nextArrow() { return this.activeSlide.find('.next-arrow'); }
    get prevArrow() { return this.activeSlide.find('.prev-arrow'); }
    get slideHeading() { return this.activeSlide.find('.heading'); }

    clickNext() {
        this.nextArrow.should('be.visible').click({ force: true });
    }

    clickPrev() {
        this.prevArrow.should('be.visible').click({ force: true });
    }
}

export default new SliderPage();