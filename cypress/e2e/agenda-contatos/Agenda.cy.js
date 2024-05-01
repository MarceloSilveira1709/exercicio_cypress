/// <reference types="cypress" />

describe('Testes para a agenda', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it ('Deve testar funcionalidades da agenda', () => {
        cy.get('input').should('have.length', 3)
        cy.get('.adicionar').first().click()
        cy.get('.delete').first().click()
        cy.get('.edit').first().click()
    })
})