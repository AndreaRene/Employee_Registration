// TODO: Smile. You are enough.

const Manager = require("../lib/Manager");

describe("Manager", () => {

    it("should return the office number", () => {

        const office = 211;
        const manager = new Manager(office);
        expect(manager.office).toBe(office);
    });

    // test getOffice
    // test getRole
});
