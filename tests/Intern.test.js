// TODO: Smile. You are enough.

const Intern = require("../lib/Intern");
const intern = new Intern("Archie", "123", "archie@workplace.com", "Learning Place");

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

        expect(intern.school).toBe("Learning Place");
    });
    // test getRole
    it("should return the role Intern", () => {

        expect(intern.getRole()).toBe("Intern");
    })
})