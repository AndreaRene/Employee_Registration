// TODO: Smile. You are enough.
const { writeFile } = require('fs').promises;
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/generateHTML")

//global
const teamMembers = []



// inside .then in inquirer
// const team = new Manager(data.name, data.id, data.email, data.office)
//teamMembers.push(team)

const employeeQuestions = (selectData) => {
    if (teamMembers.length === 0) {
        console.log("Please enter information about your team members below starting with the manager.");
    };

    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please input the employee's name:"
        },
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
    ]).then((employeeData) => {
        if (teamMembers.length === 0) {
            managerQuestions(employeeData);
        } else if (selectData.select === "Add New Engineer") {
            engineerQuestions(employeeData);
        } else {
            internQuestions(employeeData);
        };
    });
};

const managerQuestions = (employeeData) => {
    inquirer.prompt([
        {
            type: "input",
            name: "managerOffice",
            message: "Please input the manager's office number:"
        },
    ]).then((managerData) => {
        const manager = new Manager(employeeData.name, employeeData.EID, employeeData.email, managerData.managerOffice);
        teamMembers.push(manager);
        select();
    })
};

const engineerQuestions = (employeeData) => {
    inquirer.prompt([
        {
            type: "input",
            name: "github",
            message: "Please input the engineer's github username:"
        },
    ]).then((engineerData) => {
        const engineer = new Engineer(employeeData.name, employeeData.EID, employeeData.email, engineerData.github);
        teamMembers.push(engineer);
        select();
    });
};

const internQuestions = (employeeData) => {
    inquirer.prompt([
        {
            type: "input",
            name: "school",
            message: "Please input the intern's school name:"
        },
    ]).then((internData) => {
        const intern = new Intern(employeeData.name, employeeData.EID, employeeData.email, internData.school);
        teamMembers.push(intern);
        select();
    });
};

const select = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "select",
            choices: ["Add New Engineer", "Add New Intern", "Finish"]
        }
    ]).then((data) => {
        if (data.select === "Add New Engineer" || data.select === "Add New Intern") {
            employeeQuestions(data);
        } else {
            const newHTML = generateHTML(teamMembers);
            createFile(newHTML);
            console.log(teamMembers);
        };
    });
};

const createFile = (newHTML) => {
    writeFile("team.html", newHTML);
}

employeeQuestions();
// look up .filter

