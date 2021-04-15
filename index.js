// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];

const generateREADME = (answers) =>
`# ${answers.name}

[![License: ${answers.license}](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
  
## Description

${answers.description}

## Table of Contents

<ul>
<li>First item</li>
<li>Second item</li>
<li>Third item</li>
<li>Fourth item</li>
</ul>

## Installation

To install necessary dependencies, run the following command:

> init i ${answers.command}

## Usage
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
      name: 'liscense',
      message: 'What kind of license should your project have?',
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
      type: 'input',
      name: 'command',
      message: 'What command should be run to install dependencies?',
    },
  ])
  .then((answers) => {
    const readmePageContent = generateREADME(answers);

    fs.writeFile('readme.md', readmePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created readme.md!')
    );
  });