// TODO: Smile. You are enough.

const Intern = require("../lib/Intern");

describe("Intern", () => {

    it("should return a school name", () => {

        const school = "Some School Name";
        const intern = new Intern(school);
        expect(intern.school).toBe(school);
    });
    //test getSchool
    // test getRole
})