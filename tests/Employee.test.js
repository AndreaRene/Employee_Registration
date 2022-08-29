// TODO: Smile. You are enough.

const Employee = require("../lib/Employee")
const employee = new Employee("Archie", "123", "archie@workplace.com");

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

        const name = "Kevin"
        const id = "227508";
        const employee = new Employee(name, id);
        expect(employee.id).toBe(id);

    });
    // should return email
    it("should return the email", () => {

        const name = "Kevin"
        const id = "227508";
        const email = "kevin.logan@workplace.com";
        const employee = new Employee(name, id, email);
        expect(employee.email).toBe(email);
    });

    // test get name
    it("should return the name from the object", () => {

        expect(employee.getName()).toBe("Archie");
    });
    // test get id
    it("should return the id from the object", () => {

        expect(employee.getId()).toBe("123");
    });
    // test get email
    it("should return the email from the object", () => {

        expect(employee.getEmail()).toBe("archie@workplace.com");
    });
    // test get role
    it("should return the role Employee", () => {

        expect(employee.getRole()).toBe("Employee");
    });
});

