describe('Internal Links - Multi-page Validation', () => {

    const pages = ['/', '/mobility', '/aeronautics', '/space', '/about-us', '/partners'];

    pages.forEach((page) => {
        it(`should validate internal menu links from ${page}`, () => {
            cy.visit(page);

            cy.get('nav a').each(($link) => {
                const href = $link.prop('href');

                expect(href, 'href exists').to.be.a('string').and.not.be.empty;

                cy.location('origin').then((origin) => {

                    if (href.startsWith(origin)) {
                        cy.request({
                            url: href,
                            failOnStatusCode: false
                        }).then((response) => {
                            expect(
                                response.status,
                                `Broken internal link found on ${page}: ${href}`
                            ).to.eq(200);
                        });
                    }

                });
            });
        });
    });
});
