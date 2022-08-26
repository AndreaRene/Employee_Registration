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
    it("should return the id number", () => {

        const id = "227508";
        const employee = new Employee(id);
        expect(employee.id).toBe(id);

    });
    // should return email
    it("should return the email", () => {

        const email = "kevin.logan@workplace.com";
        const employee = new Employee(email);
        expect(employee.email).toBe(email);
    });

    // test get name
    // test get id
    // test get email
    // test get role
});

