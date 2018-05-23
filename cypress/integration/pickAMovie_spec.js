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
       cy.get('header').contains('genre')
           .click()
           .should('match','[class*=btnActive]')
           .should('not.match','[class*=btnInactive]');
       cy.get('header input')
           .should('have.attr','placeholder', 'Action');
       cy.get('header').contains('title')
          .click()
          .should('match','[class*=btnActive]')
          .should('not.match','[class*=btnInactive]');
       cy.get('header input')
          .should('have.attr', 'placeholder', 'Kill Bill');
       cy.get('header input')
          .type('Kill Bill')
          .should('have.attr', 'value', 'Kill Bill');
       cy.get('[class^=SearchBox__search___').contains('Search')
          .click();
   });
    it('clicks one of the movies, visits the movie info, and comes back to search page', () => {
       cy.get('article').contains('Kill Bill')
           .click();
       cy.get('header img[class*=MoviePage__poster]');
       cy.get('header div[class*=MoviePage__details]');
       cy.get('header h1')
           .should('contain', 'Kill Bill');
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
    });
    it('finds a movie, makes it active and revisits current page to check if the store is persisted', () => {
        cy.reload();
        cy.get('header input')
            .type('Kill Bill');
        cy.get('[class^=SearchBox__search___').contains('Search')
            .click();
        cy.get('article').contains('Kill Bill')
            .click();
        cy.visit('/?tryagain=now');
        cy.get('header h1')
            .should('contain', 'Kill Bill');
    })
});