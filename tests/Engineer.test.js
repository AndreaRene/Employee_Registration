// TODO: Smile. You are enough.

const Engineer = require("../lib/Engineer");

describe("Engineer", () => {

    it("should return a github username", () => {

        const name = "Kevin"
        const id = "227508";
        const email = "kevin.logan@workplace.com";
        const github = "SomeUser";
        const engineer = new Engineer(name, id, email, github);
        expect(engineer.github).toBe(github);
    });
    // test getGithub
    it("should return the github username from the object", () => {

        const engineer = new Engineer("Archie", "123", "archie@workplace.com", "archibald");
        expect(engineer.github).toBe("archibald");
    });
    // test getRole
});