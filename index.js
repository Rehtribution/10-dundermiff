const inquirer = require("inquirer");
const fs = require("fs");
const create = require('./src/template')

//creates the team members requiring the associated lib files
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//sets the team array
const team = []

//node question prompts
inquirer.prompt([
    {
        type: 'input',
        name: 'managerName',
        message: 'What is your managers name?'
    },
    {
        type: 'input',
        name: 'managerId',
        message: 'What is your managers ID?'
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is your managers email?',
// validating email format input using regex
        validate: function(emailInput)
        {
            var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(emailInput);
        }
    },
    {
        type: 'input',
        name: 'managerOfficeNumber',
        message: 'What is your managers office number?'
    },
]).then(answers => {
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber)
    //pushes new team member into empty array
    team.push(manager)
    whatNext()
})

//prompt what action to take after each team member has been created
function whatNext() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'whatNext',
            message: 'What would you like to do next?',
            choices: ['Add Engineer', 'Add Intern', 'Done']
        },
    ]).then(answer => {
        if (answer.whatNext === 'Add Engineer') {
            addEngineer()
        } else if (answer.whatNext === 'Add Intern') {
            addIntern()
        } else {
            done()
        }
    })
}

//function to add engineer
function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is your engineers name?'
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'What is your engineers ID?'
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is your engineers email?',
// validating email format input using regex
        validate: function(emailInput)
        {
            var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(emailInput);
        }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your engineers github?'
        },
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.github)
        //pushes new team member into empty array
        team.push(engineer)
        whatNext()
    })
}

//function to add intern
function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is your interns name?'
        },
        {
            type: 'input',
            name: 'internId',
            message: 'What is your interns ID?'
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is your interns email?',
// validating email format input using regex
        validate: function(emailInput)
        {
            var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(emailInput);
        }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is your engineers school?'
        },
    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.school)
        //pushes new team member into empty array
        team.push(intern)
        whatNext()
    })
}

//done will create the team.html file
function done() {
    console.log(team);
    fs.writeFile('team.html', create(team), err => err ? console.log(err) : console.log("==========HTML page created!=========="));
}
