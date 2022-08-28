// TODO: Smile. You are enough.

const Intern = require("../lib/Intern");

describe("Intern", () => {

    it("should return a school name", () => {

        const name = "Kevin"
        const id = "227508";
        const email = "kevin.logan@workplace.com";
        const school = "Some School Name";
        const intern = new Intern(name, id, email, school);
        expect(intern.school).toBe(school);
    });
    //test getSchool
    it("should return the school from the object", () => {

        const intern = new Intern("Archie", "123", "archie@workplace.com", "Learning Place");
        expect(intern.school).toBe("Learning Place");
    });
    // test getRole
})