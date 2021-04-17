// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];

// [![License${answers.licenseOne}](https://img.shields.io/badge/License-${answers.licenseTwo}-blue.svg)](https://opensource.org/licenses/${answers.licenseThree})

const generateREADME = (answers) =>
`# ${answers.name}

${answers.badge}
  
## Description

${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

> npm i ${answers.installation}

## Tests

To run tests, run the following command:

> npm test ${answers.tests}

## Usage

${answers.usage}

## License

This application is covered under the following license: ${answers.license}

## Contributing

${answers.contributing}

## Questions

Have questions? Contact this project's creator at ${answers.email}.

Their GitHub profile page is github.com/${answers.username}.

`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'username',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'name',
      message: "What is your project's name?",
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please write a short description of your project:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What kind of license should your project have?',
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What command should be run to install dependencies? (npm i)',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What command should be run to run tests? (npm test)',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What does the user need to know about using the repo?',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'What does the user need to know about contributing to the repo?',
    },
  ])
  .then((answers) => {

    if (answers.license === "MIT") {
      answers.licenseOne = ": MIT";
      answers.licenseTwo = "MIT";
      answers.licenseThree = "MIT";
    }

    if (answers.license === "APACHE 2.0") {
      answers.licenseOne = "";
      answers.licenseTwo = "Apache%202.0";
      answers.licenseThree = "Apache-2.0";
    }

    if (answers.license === "GPL 3.0") {
      answers.licenseOne = ": GPL v3";
      answers.licenseTwo = "GPLv3";
      answers.licenseThree = "gpl-3.0";
    }

    if (answers.license === "BSD 3") {
      answers.licenseOne = "";
      answers.licenseTwo = "BSD%203--Clause";
      answers.licenseThree = "BSD-3-Clause";
    }

    if (answers.license === "None") {
      answers.licenseOne = "";
      answers.licenseTwo = "";
      answers.licenseThree = "";
    }

    if (answers.license === "None") {
      answers.badge = "";
    } else {
      answers.badge = `[![License${answers.licenseOne}](https://img.shields.io/badge/License-${answers.licenseTwo}-blue.svg)](https://opensource.org/licenses/${answers.licenseThree})`;
    }

    const readmePageContent = generateREADME(answers);

    fs.writeFile('readme.md', readmePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created readme.md!')
    );
  });