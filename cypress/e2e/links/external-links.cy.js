describe('External Links - Multi-page Validation', () => {

    const pages = ['/', '/mobility', '/aeronautics', '/space', '/about-us', '/partners'];
    const blockedDomains = ['facebook.com', 'instagram.com', 'linkedin.com', 'twitter.com', 'youtube.com'];

    pages.forEach((page) => {
        it(`should validate external links on ${page}`, () => {
            cy.visit(page);

            cy.get('a[target="_blank"]').each(($link) => {
                const href = $link.prop('href');

                expect(href, 'href exists').to.be.a('string').and.not.be.empty;

                if (
                    href.startsWith('mailto:') ||
                    href.startsWith('tel:') ||
                    href.startsWith('javascript:')
                ) return;

                const url = new URL(href);
                const domain = url.hostname;

                if (blockedDomains.some(d => domain.includes(d))) {
                    cy.log(`Skipping bot-protected domain: ${domain}`);
                    return;
                }

                cy.location('origin').then((origin) => {
                    if (!href.startsWith(origin)) {

                        cy.wrap($link).should('have.attr', 'target', '_blank');

                        cy.request({
                            url: href,
                            failOnStatusCode: false,
                        }).then((response) => {
                            expect(
                                response.status,
                                `Status code for ${href}`
                            ).to.be.within(200, 399);
                        });

                    }
                });
            });
        });
    });
});
