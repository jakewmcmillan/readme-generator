// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = ['What is the title of your project?', 'Provide a description of your project.', 'Provide installation instructions for your project.', 'Provide any relevant usage information for your project.', 'List any project contributors.', 'What are test instructions for your project?'];

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project.'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide installation instructions for your project.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide any relevant usage information for your project.'
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'List any project contributors.'
        },
        {
            type: 'input',
            name: 'test',
            message: 'What are test instrcutions for your project?'
        }
    ])
    .then((data) => {
        const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

        fs.writeFile(filename, json.stringify(data, null, '\t'), (err) =>
            err ? console.log(err) : console.log('ReadMe successfully created!')
        );
    });

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
