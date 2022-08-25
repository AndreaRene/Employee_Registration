// TODO: Smile. You are enough.

const Employee = require("../lib/Employee")

describe("Employee", () => {
    it("should return the name", () => {

        // set variable
        const name = "Kevin"
        // put through constructor
        const employee = new Employee(name)
        // constructor returns constructed object
        expect(employee.name).toBe(name);
    });
    // should return id
    // should return email

    // test get name
    // test get id
    // test get email
    // test get role
});

