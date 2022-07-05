//returns license badge, license link, and inputted user data into readme.
function generateMarkdown(data) {
  return `# ${data.title}
  ## Licensing:

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
