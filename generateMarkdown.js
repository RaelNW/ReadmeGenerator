//generate license budge based on the value of the license


//Creating a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [How to use the application](#usage)
* [Contributors](#contributors)
* [Testing](#testing)
* [Questions](#questions)
## Installation
${data.installation}
## How to Use This Application:
${data.usage}
## Contributors
${data.contributors}
## Testing
${data.test}
## Questions
Please send your questions [here](mailto:${
    data.email
  } or visit my github page, my user name is ${
    data.githubUsername
  } and this is my github url ${data.githubUrl}
`;
}

module.exports = generateMarkdown;
