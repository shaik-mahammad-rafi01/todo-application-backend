const dbMockDocument = {
    get: jest.fn(),
    delete: jest.fn(),
    update: jest.fn()
}

const MockCollection = {
    add: jest.fn(),
    get: jest.fn(),
    doc: jest.fn(() => dbMockDocument)
}

jest.mock("../config/dbConfig.js", () => ({
    db: {
        collection: jest.fn(() => MockCollection)
    }
}));

import { addTask } from "./TaskServices.js";

describe("TaskService testcases", () => {
    beforeEach(() => {
        jest.clearAllMocks();

    });
    afterEach(() => {
        jest.clearAllMocks();
    });

    test("It should add task to db", async () => {
        const mockData = {
            taskName: "salar",
            description: "movie",
            status: "pending",
            priority: "low",
            deadline: new Date()
        }
        MockCollection.add.mockResolvedValue({ id: "1234" })
        const result = await addTask(mockData)
        expect(result).toBe({id : "1234" , ...mockData})

    })
})