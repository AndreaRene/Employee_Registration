// TODO: Smile. You are enough.

const Manager = require("../lib/Manager");

describe("Manager", () => {

    it("should return the office number", () => {

        const name = "Kevin"
        const id = "227508";
        const email = "kevin.logan@workplace.com";
        const officeNumber = "211";
        const manager = new Manager(name, id, email, officeNumber);
        expect(manager.officeNumber).toBe(officeNumber);
    });

    // test getOffice

    it("should return the office number from the object", () => {

        const manager = new Manager("Archie", "123", "archie@workplace.com", "301");
        expect(manager.officeNumber).toBe("301");
    });
    // test getRole
});

