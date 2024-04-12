describe('tmdb  testing', () => {
      it('should visit', () => {
        cy.visit('https://www.themoviedb.org/') //to open url or web the movie edb
        cy.get('#onetrust-accept-btn-handler').click()

        cy.contains('Masuk').click() //to click button login or //cy.get('.primary > :nth-child(3) > a').click() 
        cy.get('#username').type('admintester');
        cy.get('#password').type('admin123');
        cy.get('#login_button').click()//click button login

        cy.get('.logo > img').click()

        cy.get('#trending_scroller > .column_content > :nth-child(1) > div.image > .options > .no_click > .glyphicons_v2').click()
        cy.contains('Favorite').click(),{force: true}
        cy.get('.k-tooltip-content > .settings_content > :nth-child(2)')
      })

     // it('Login Section', () => {
        
      //})
    
       // context('step by step', () => {
      
        
        //cy.location("pathname").should("equal", "/login")

       

      //it('back to main menu', () => {
      //  
     // })
   // })
 })   
