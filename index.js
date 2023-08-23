const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./generateMarkdown");

//Creating questions for user input
inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "How will you install your project",
      name: "installation",
    },
    {
      type: "input",
      message: "What are the usage",
      name: "usage",
    },
    {
      type: "input",
      message: "What is your GitHub URL",
      name: "description",
    },
    {
      type: "list",
      message: "What license will you use for this project",
      name: "license",
      choices: [
        "Apache License 2.0",
        "GNU General Public License v 3.0",
        "MIT License",
        "BSD License",
        "Boost Software License",
        "Creative Commons Zero v 1.0 Universal",
        "The Unlicense",
        "Eclipse Public License 2.0",
        "GNU Affero General Public License v 3.0",
        "GNU General Public License v 2.0",
        "Mozilla Public License 2.0",
      ],
    },
    {
      type: "input",
      message: "How can others contribute to the project",
      name: "contributors",
    },
    {
      type: "input",
      message: "How will you test this project",
      name: "test",
    },
    {
      type: "input",
      message: "What is your GitHub username",
      name: "githubUsername",
    },
    {
      type: "input",
      message: "What is your GitHub URL",
      name: "githubUrl",
    },
    {
      type: "input",
      message: "What is your email",
      name: "email",
    },
  ])
  .then((response) => {
    console.log(response);
  });
//const readme =
