import { BasePage } from "./base";

export class HomePage extends BasePage {
    get addNewTaskInput() {
        return cy.get("[id=newTask]");
    }

    get createTaskButton() {
        return cy.contains("button", "Create");
    }

    get taskList() {
        return cy.get('[data-testid="task-item"]');
    }

    get alreadyExistTaskAlert() {
        return cy.get("#swal2-html-container");
    }

    typeAndCreateNewTask(task) {
        this.addNewTaskInput
            .should("be.visible")
            .should("be.enabled")
            .type(task.name);
        this.createTaskButton.click();
    }

    assertTaskList(task) {
        this.taskList.should("contain", task.name);
    }

    taskAlertShouldContain(message) {
        this.alreadyExistTaskAlert.should("be.visible");
        this.alreadyExistTaskAlert.should("contain", message);
    }
}

export const homePage = new HomePage();
