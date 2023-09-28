import { faker } from "@faker-js/faker";

class Task {
    constructor(name, isDone) {
        this.name = name;
        this.isDone = isDone;
    }

    generateRandomData() {
        if (!this.name) this.name = faker.lorem.words(3);
        if (typeof this.isDone !== 'boolean') this.isDone = faker.datatype.boolean();
        return this;
    }
}

const generateTaskPayload = (name, isDone) => {
    return new Task(name, isDone).generateRandomData();
};

export { generateTaskPayload };
