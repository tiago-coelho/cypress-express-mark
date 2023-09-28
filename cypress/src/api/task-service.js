const BASE_URL = "http://localhost:3333";

export default class TaskService {
    async addTask(task) {
        cy.request({
            url: `${BASE_URL}/tasks`,
            method: "POST",
            body: { name: task.name, is_done: task.isDone },
        }).then((response) => {
            expect(response.status).to.eq(201);
        });
    }

    async deleteTask(task) {
        cy.request({
            url: `${BASE_URL}/helper/tasks`,
            method: "DELETE",
            body: { name: task.name },
        }).then((response) => {
            expect(response.status).to.eq(204);
        });
    }
}
export const taskService = new TaskService();
