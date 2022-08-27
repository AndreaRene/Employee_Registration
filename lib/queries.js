// TODO: Smile. You are enough.

const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

//global
const teamMemers = []



// inside .then in inquirer
// const team = new Manager(data.name, data.id, data.email, data.office)
//teamMemers.push(team)

const employeeQuestions = (selectData) => {
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
        if (teamMemers.length === 0) {
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
        teamMemers.push(manager);
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
        teamMemers.push(engineer);
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
        teamMemers.push(intern);
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
            finish();
        }
    })
}
// look up .filter

// function getManager() {
//     employeeQuestions();
//     managerQuestions();
//     select();
// }

// function getEngineer() {
//     employeeQuestions();
//     engineerQuestions();
//     select();
// }

// function getIntern() {
//     employeeQuestions();
//     internQuestions();
//     select();
// }

function finish() {
    // run the generate stuff
}

module.exports = Queries;