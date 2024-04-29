describe('login', () => {
    it('success login', () => {
        cy.visit('https://www.themoviedb.org/')
        cy.get('#onetrust-accept-btn-handler').click()
        cy.contains('Masuk').click()
   
        cy.get('#username').type('admintester')
        cy.get('#password').type('admin123')
        cy.get('#login_button').click()//click button login
        cy.location("pathname").should("equal", "/u/admintester")
        
        cy.get('.logo > img').click()//back to main menu or home
            //cy.get('#trending_scroller > .column_content > :nth-child(1) > div.image > .options > .no_click > .glyphicons_v2').click()
       
        //#mark vaforite  1 movie"#//    
        cy.get(':nth-child(1) > div.image > .wrapper > .image > .poster').click()
        cy.get('#favourite').click()
        cy.location("pathname").should("equal", "/tv/106379-fallout")
 
    })
})