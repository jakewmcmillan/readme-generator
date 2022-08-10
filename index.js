// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMD = ({ title, description, installation, usage, constributors, test, username, email }) =>
`# ${title}

## Description
${description}
## Table of Contents
-[Installation](#installation)

-[Usage](#usage)

-[Credits](#credits)

-[License](#license)

-[Badges](#badges)

-[Features](#features)

-[How to Contribute](#how-to-contribute)

-[Tests](#tests)

-[Questions](#questions)

## Installation
${installation}
## Usage
${usage}
## Credits
${constributors}
## License

## Badges

## Features

## How to Contribute

## Tests
${test}
## Questions
[${username}]('https://github.com/ + ${username}')
${email}`;

// TODO: Create an array of questions for user input
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
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    }
])
.then((answers) => {
    const mdPageContent = generateMD(answers);

    fs.writeFile('generated-files/README.md', mdPageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md')
    );
}) ;

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();