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
    // test getRole
});