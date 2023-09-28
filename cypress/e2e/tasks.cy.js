import { generateTaskPayload } from "../src/payload/task-payload";
import { taskService } from "../src/api/task-service";

describe("tasks", () => {
    it("should create a new task", () => {
        let task = generateTaskPayload();
        taskService.deleteTask(task);

        cy.visit("http://localhost:8080/");
        cy.get("[id=newTask]").type(task.name);
        cy.contains("button", "Create").click();
        cy.get('[data-testid="task-item"]').should("contain", task.name);
    });

    it("should not allow duplicated tasks", () => {
        let task = generateTaskPayload(null, false);

        taskService.addTask(task);

        cy.visit("http://localhost:8080/");
        cy.get("[id=newTask]").type(task.name);
        cy.contains("button", "Create").click();
        cy.get("#swal2-html-container").should(
            "contain",
            "Task already exists!"
        );

        taskService.deleteTask(task);
    });
});
