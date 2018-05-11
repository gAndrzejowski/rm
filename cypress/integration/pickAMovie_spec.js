describe('Movies app', () => {
   it('visits the page', () => {
       cy.visit('/');
   });
   it('displays page title in header and footer', () => {
       cy.get('header').contains('netflixroulette');
       cy.get('footer').contains('netflixroulette');
   });
   it('types in searchBox and changes search a property to search movies by', () => {
        cy.get('header h2').should('have.text', 'Find your movie');
        cy.get('header').contains('Search by');
        cy.get('header input')
            .type('Some movie I\'d like to find')
            .should('have.attr', 'value', 'Some movie I\'d like to find');
        cy.get('header').contains('genre')
            .click()
            .should('match','[class*=btnActive]')
            .should('not.match','[class*=btnInactive]');
       cy.get('header').contains('title')
           .click()
           .should('match','[class*=btnActive]')
           .should('not.match','[class*=btnInactive]');
       cy.get('header').contains('Search')
           .click();
   });
    it('clicks one of the movies, visits the movie info, and comes back to search page', () => {
        cy.get('article').contains('Zambezia')
            .click();
        cy.get('header img[class*=MoviePage__poster]');
        cy.get('header div[class*=MoviePage__details]');
        cy.get('header h1')
            .should('contain', 'Zambezia');
        cy.get('header').contains('Search')
            .click();
        cy.get('header [class^=SearchBox__');
    });
    it('visits the toolbox and changes sorting', () => {
        cy.get('div[class^=ResultUtils__]').contains(' movies found');
        cy.get('div[class^=ResultUtils__').contains('rating')
            .click()
            .should('match', '[class^=ResultUtils__active]');
        cy.get('div[class*=ResultUtils__').contains('release date')
            .click()
            .should('match', '[class^=ResultUtils__active]');
    })
});