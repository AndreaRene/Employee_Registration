// TODO: Smile. You are enough.

const Engineer = require("../lib/Engineer");

describe("Engineer", () => {

    it("should return a github username", () => {

        const github = "SomeUser";
        const engineer = new Engineer(github);
        expect(engineer.github).toBe(github);
    });
    // test getGithub
    // test getRole
});