export class BasePage {
    async open(path) {
        cy.visit(path);
    }
}

export const basePage = new BasePage();
