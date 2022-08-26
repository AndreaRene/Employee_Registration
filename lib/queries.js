// TODO: Smile. You are enough.

const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

//global
//const teamMemers = []



// inside .then in inquirer
// const team = new Manager(data.name, data.id, data.email, data.office)
//teamMemers.push(team)

const employeeQuestions = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "EID",
            message: "Please enter the employee ID number:"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the employee's email address:"
        },
    ]);
};

const managerQuestions = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "Please input the manager's name:"
        },
        {
            type: "input",
            name: "managerOffice",
            message: "Please input the manager's office number:"
        },
    ]);
};

const engineerQuestions = () => {
    inquirer.prmopt([
        {
            type: "input",
            name: "engineerName",
            message: "Please input the engineer's name:"
        },
        {
            type: "input",
            name: "github",
            message: "Please input the engineer's github username:"
        },
    ]);
};

const internQuestions = () => {
    inquirer.prmopt([
        {
            type: "input",
            name: "internName",
            message: "Please input the intern's name:"
        },
        {
            type: "input",
            name: "school",
            message: "Please input the intern's school name:"
        },
    ]);
};

module.exports = queries;
// look up .filter