describe('login', () => {
    it('success login', () => {
        cy.visit('https://www.themoviedb.org/')
        cy.get('#onetrust-accept-btn-handler').click()
        cy.contains('Masuk').click()
   
        cy.get('#username').type('admintester')
        cy.get('#password').type('admin123')
        cy.get('#login_button').click()//click button login
        cy.location("pathname").should("equal", "/u/admintester")
        
    })
})