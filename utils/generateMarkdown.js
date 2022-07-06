//function for rendering license section
let badge = ""
function renderLicenseSection(license) {
  if (license == "AGPLv3") {
    badge =`## Licensing
    ![License: GNU AGPLv3](https://img.shields.io/badge/License-AGPLv3-blue.svg)
    - License: GNU AGPLv3
    `
  } else if (license == "GPLv3") {
    badge = `## Licensing
    ![License: GNU GPLv3](https://img.shields.io/badge/License-GPLv3-blue.svg)
    - License: GNU GPLv3
    `
  } else if (license == "LGPLv3") {
    badge = `## Licensing
    ![License: GNU LGPLv3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)
    - License: GNU LGPLv3
    `
  } else if (license == "Apache") {
    badge = `## Licensing
    ![License: Apache License 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)
    - License: Apache License 2.0
    `
  } else if (license == "MIT") {
    badge = `## Licensing
    ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
    - License: MIT
    `
  } else if (license == "Unlicense") {
    badge = `## Licensing
    ![License: Unlicense](https://img.shields.io/badge/License-Unlicense-blue.svg)
    - License: Unlicense
    `
  } else {
    badge = "";
  }
};

//returns license badge, license link, and inputted user data into readme.
function generateMarkdown(data) {
  renderLicenseSection(data.license);
  return `# ${data.title} 
  ${badge} 
  ## Table of Contents 
  [Description](#description)
  [Installation](#installation)
  [Usage](#usage)
  [Contribution](#contributors)
  [Testing](#test)
  [Contact Info](#contact-info)

  ## Description:
  ${data.description}

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## Contributors:
  ${data.contributors}

  ## Testing:
  ${data.test}

  ## Contact Info:
  - Github: [${data.userName}](https://github.com/${data.userName})
  - Email: ${data.userEmail} 
`
};

module.exports = generateMarkdown;
