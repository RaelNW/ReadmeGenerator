//generate license budge based on the value of the license
function renderLicenseBadge(license) {
  let badge = "";
  //switch statement to generate the badge based on the license
  switch (license) {
    case "Apache License 2.0":
      badge = "Apache%202.0-blue";
      break;
    case "GNU General Public License v 3.0":
      badge = "GPLv3-blue";
      break;
    case "MIT License":
      badge = "MIT-yellow";
      break;
    case "BSD License":
      badge = "BSD%203--Clause-blue";
      break;
    case "Boost Software License":
      badge = "BSL-1.0-blue";
      break;
    case "Creative Commons Zero v 1.0 Universal":
      badge = "CC0-1.0-blue";
      break;
    case "The Unlicense":
      badge = "Unlicense-blue";
      break;
    case "Eclipse Public License 2.0":
      badge = "EPL-2.0-blue";
      break;
    case "GNU Affero General Public License v 3.0":
      badge = "AGPL%20v3-blue";
      break;
    case "GNU General Public License v 2.0":
      badge = "GPL%20v2-blue";
      break;
    case "Mozilla Public License 2.0":
      badge = "MPL%202.0-blue";
      break;
    default:
      badge = "";
  }
  return badge
    ? `<img src="https://img.shields.io/badge/License-${badge}.svg">`
    : "";
}

// Creating a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license);
  return `# ${data.title}
${badge}
## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributors
${data.contributors}

## Tests
${data.test}

## License
${data.license}

## Questions
For questions or additional information, please contact me via email at ${data.email} or visit my [GitHub profile](https://github.com/${data.githubUsername}).
`;
}

module.exports = generateMarkdown;

