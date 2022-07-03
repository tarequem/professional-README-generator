// TODO: Include packages needed for this application
const inquirer = require("inquirer");

//const fs = require("fs");

//const pageMD = generatePage(responses, data);

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {   
            message: "What is the name of your project?",
            name: "title"
        },
        {   
            message: "Please provide a table on content",
            name: "table of content"
        },
        {   
            message: "What is the name of the user?",
            name: "userName"
        },
        {  
            message: "Please provide a description of the project",
            name: "description"
        },
        {   
            message: "What is the installation process?",
            name: "installation"
        },
        {   
            message: "How will this project be used?",
            name: "usage"
        },
        {   
            message: "What licenses are required with this project?",
            name: "licenses"
        },
        {   
            message: "Who were the contributors to this project?",
            name: "contribution"
        },
        {   
            message: "What is the test process for this project?",
            name: "test"
        },
        {   
            message: "What is the user github email address?",
            name: "GitHub user email"
        },
        {   
            message: "Please provide a profile picture",
            name: "GitHub profile picture"
        }
    ]);
};
promptUser().then(answers => console.log(answers));

// // TODO: Create a function to write README file
// fs.writeToFile("./README.md", pageMD, err => {
//     if (err) throw new Error(err);
// });

// // TODO: Create a function to initialize app
// function init() {

// }

// // Function call to initialize app
// init();