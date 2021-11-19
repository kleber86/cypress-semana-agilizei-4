/// <reference types="cypress" />

describe('Twitter Clone - Login', () => {
  it('Ao autenticar com credenciais válidas, deve redirecionar ao feed.', ()=>{

    cy.intercept({
      method: 'GET',
      hostname: 'res.cloudinary.com'
    },{
      statusCode: 200,
      fixture: 'download'
    }).as('cloudinary')

    cy.visit('https://twitter-clone-example.herokuapp.com/')

    cy.get('input[type=email]').type('agilizei086@mail.com')
    cy.get('input[type=password]').type('Senha@2021')
    cy.get('button[type=submit]').click()

    cy.get('nav ul li')
      .should('be.visible')
      .and('have.length', 6)
  })
})