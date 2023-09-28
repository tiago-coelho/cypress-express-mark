import { generateTaskPayload } from "../src/payload/task-payload";
import { taskService } from "../src/api/task-service";
import { homePage } from "../support/pages/home/home";

describe("tasks", () => {
    it("should create a new task", () => {
        let task = generateTaskPayload();

        taskService.deleteTask(task);
        
        homePage.open('/');
        homePage.typeAndCreateNewTask(task);
        homePage.assertTaskList(task);

        taskService.deleteTask(task);
    });

    it("should not allow duplicated tasks", () => {
        let task = generateTaskPayload(null, false);

        taskService.addTask(task);

        homePage.open('/');
        homePage.typeAndCreateNewTask(task);
        homePage.assertTaskList(task);
        homePage.taskAlertShouldContain("Task already exists!");

        taskService.deleteTask(task);
    });
});
