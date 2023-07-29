describe('check todoList Function', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('should locates input field fill data and  click add button ', () => {
        cy.get("[data-testid='task-input']").type('Buy Groceries')
        cy.get("[data-testid='add-button']").click()
        cy.contains('Buy Groceries').should("be.visible")
        cy.get("[data-testid='task-input']").type('Buy Apple')
        cy.get("[data-testid='add-button']").click()
        cy.contains('Buy Apple').should("be.visible")
    }),


        it('should strike the card when its clicked', () => {
            cy.contains('Buy Groceries').click()
            cy.get('.line-through').contains('Buy Groceries')
        })


    it('should delete when the delete button is clicked', () => {
        cy.get("[data-testid='delete-button']").first().click();
        cy.get('#task-list').should('not.contain', 'Buy Groceries')
        cy.contains('Buy Apple').should("be.visible")

    })
})