// TODO: Smile. You are enough.
const { writeFile } = require('fs').promises;
const inquirer = require("inquirer");
const chalk = require("chalk");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/generateHTML");
const teamMembers = [];



const employeeQuestions = (selectData) => {
    if (teamMembers.length === 0) {
        console.log(chalk.black.bgMagenta("Please enter information about your team members below starting with the manager."));
    };

    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: chalk.magenta("Please input the employee's name:"),
            validate: val => /^[a-z]/i.test(val),
        },
        {
            type: "input",
            name: "EID",
            message: chalk.magenta("Please enter the employee ID number:"),
            validate: val => /^[1-9]/.test(val),
        },
        {
            type: "input",
            name: "email",
            message: chalk.magenta("Please enter the employee's email address:"),
            validate: email => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

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
            message: chalk.magenta("Please input the manager's office number:"),
            validate: val => /^[1-9]/.test(val),
        },
    ]).then((managerData) => {
        const manager = new Manager(employeeData.name, employeeData.EID, employeeData.email, managerData.managerOffice);
        manager.role = manager.getRole();
        teamMembers.push(manager);
        select();
    });
};

const engineerQuestions = (employeeData) => {
    inquirer.prompt([
        {
            type: "input",
            name: "github",
            message: chalk.magenta("Please input the engineer's github username:"),
            validate: val => /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i.test(val),
        },
    ]).then((engineerData) => {
        const engineer = new Engineer(employeeData.name, employeeData.EID, employeeData.email, engineerData.github);
        engineer.role = engineer.getRole();
        teamMembers.push(engineer);
        select();
    });
};

const internQuestions = (employeeData) => {
    inquirer.prompt([
        {
            type: "input",
            name: "school",
            message: chalk.magenta("Please input the intern's school name:"),
            validate: val => /^[a-z]/i.test(val),
        },
    ]).then((internData) => {
        const intern = new Intern(employeeData.name, employeeData.EID, employeeData.email, internData.school);
        intern.role = intern.getRole();
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
        };
    });
};

const createFile = (newHTML) => {
    writeFile(`dist/${teamMembers[0].name}-team-profile.html`, newHTML);
    console.log(chalk.black.bgMagenta("File Successfully Written"))
}

employeeQuestions();

