//Packages
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const { reject } = require("lodash");

//Inquirer will go through the prompts
const userPrompt = [
    {   
        type: "input",
        message: "What is the project's name?",
        name: "title",
        validate: (value) => {
            if (value) {
                return true
            } else {
                return "Please enter a value"
            }
        }
    },
    {  
        type: "input",
        message: "Please describe the project.",
        name: "description",
        validate: (value) => {
            if (value) {
                return true
            } else {
                return "Please enter a value"
            }
        }
    },
    {   
        type: "input",
        message: "Please provide instructions for installation.",
        name: "installation",
        validate: (value) => {
            if (value) {
                return true
            } else {
                return "Please enter a value"
            }
        }
    },
    {   
        type: "input",
        message: "What is the usage for this project?",
        name: "usage",
        validate: (value) => {
            if (value) {
                return true
            } else {
                return "Please enter a value"
            }
        }
    },
    {   
        type: "input",
        message: "How should this project be contributed to?",
        name: "contributors",
        validate: (value) => {
            if (value) {
                return true
            } else {
                return "Please enter a value"
            }
        }
    },
    {   
        type: "input",
        message: "What is the test process?",
        name: "test",
        validate: (value) => {
            if (value) {
                return true
            } else {
                return "Please enter a value"
            }
        }
    },
    {   
        type: "input",
        message: "What is the github username?",
        name: "userName",
        validate: (value) => {
            if (value) {
                return true
            } else {
                return "Please enter a value"
            }
        }
    },
    {   
        type: "input",
        message: "What is the email address of the github user?",
        name: "userEmail",
        validate: (value) => {
            if (value) {
                return true
            } else {
                return "Please enter a value"
            }
        }
    },
    {   //list of licenses
        type: "checkbox",
        message: "Choose a license for this project.",
        name:"license",
        choices: ['GNU AGPLv3', 'GNU GPLv3',
        'GNU LGPLv3', 'Mozilla Public License 2.0',
        'Apache License 2.0', 'MIT License', 'Boost Software License 1.0',
        'The Unlicense']
    }
];

//Writes input to readme file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log("Your README has been written.");
    });
};

//function that initializes the prompts and sends as user input for README
function init() {
    inquirer.prompt(userPrompt).then(function (userInput) {
        console.log(userInput);
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init(); 