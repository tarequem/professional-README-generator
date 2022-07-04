// TODO: Include packages needed for this application
const inquirer = require("inquirer");

const fs = require("fs");

//const pageMD = generatePage(responses, data);

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {   
            type: "input",
            message: "What is the project's name?",
            name: "title"
        },
        {  
            type: "input",
            message: "Please describe the project.",
            name: "description"
        },
        {   
            type: "input",
            message: "Please provide instructions for installation.",
            name: "installation"
        },
        {   
            type: "input",
            message: "What is the usage for this project?",
            name: "usage"
        },
        {   
            type: "input",
            message: "Who contributed to this project?",
            name: "contribution"
        },
        {   
            type: "input",
            message: "What is the test process?",
            name: "test"
        },
        {   
            type: "input",
            message: "What is the username?",
            name: "userName",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your name.")
                }
            }
        },
        {   
            type: "input",
            message: "What is the email address of the github user?",
            name: "GitHub user email"
        },
        {   
            type: "checkbox",
            message: "Choose a license for this project.",
            name:"license",
            choices: ['GNU AGPLv3', 'GNU GPLv3',
            'GNU LGPLv3', 'Mozilla Public License 2.0',
            'Apache License 2.0', 'MIT License', 'Boost Software License 1.0',
            'The Unlicense']
        }
    ]);
};
promptUser().then(answers => console.log(answers));

// TODO: Create a function to write README file
fs.writeToFile("./README.md", pageMD, err => {
     if (err) throw new Error(err);
});

// // TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();