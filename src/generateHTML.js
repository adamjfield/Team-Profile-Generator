// create Manager card
const generateManager = function (manager) {
  return `
    <div class="col mt-3">
    <div class="card mx-auto shadow" style="width: 20rem">
      <div class="card-header text-light bg-primary">
        <h5>${manager.name}</h5>
        <h6><i class="fas fa-mug-hot"></i> Manager</h6>
      </div>
      <div class="card-body bg-light">
        <ul class="list-group list-group-flush border border-dark">
          <li class="list-group-item border-bottom border-dark">
            ID: ${manager.id}
          </li>
          <li class="list-group-item border-bottom border-dark">
            Email:
            <a href="mailto:${manager.email}"
              >${manager.email}</a
            >
          </li>
          <li class="list-group-item">Office number: ${manager.officeNumber}</li>
        </ul>
      </div>
    </div>
  </div>
  `;
};

// create Engineer card
const generateEngineer = function (engineer) {
  return `
    <div class="col mt-3">
    <div class="card mx-auto shadow" style="width: 20rem">
      <div class="card-header text-light bg-primary">
        <h5>${engineer.name}</h5>
        <h6><i class="fas fa-glasses"></i> Engineer</h6>
      </div>
      <div class="card-body bg-light">
        <ul class="list-group list-group-flush border border-dark">
          <li class="list-group-item border-bottom border-dark">
            ID: ${engineer.id}
          </li>
          <li class="list-group-item border-bottom border-dark">
            Email:
            <a href="mailto:${engineer.email}"
              >${engineer.email}</a
            >
          </li>
          <li class="list-group-item">GitHub: ${engineer.github}</li>
        </ul>
      </div>
    </div>
  </div>
  `;
};

// create Intern Card
const generateIntern = function (intern) {
  return `
    <div class="col mt-3">
    <div class="card mx-auto shadow" style="width: 20rem">
      <div class="card-header text-light bg-primary">
        <h5>${intern.name}</h5>
        <h6><i class="fas fa-user-graduate"></i> Intern</h6>
      </div>
      <div class="card-body bg-light">
        <ul class="list-group list-group-flush border border-dark">
          <li class="list-group-item border-bottom border-dark">
            ID: ${intern.id}
          </li>
          <li class="list-group-item border-bottom border-dark">
            Email:
            <a href="mailto:${intern.email}"
              >${intern.email}</a
            >
          </li>
          <li class="list-group-item">School: ${intern.school}</li>
        </ul>
      </div>
    </div>
  </div>
  `;
};

// push array to page
generateHtml = (data) => {
  // array for employee cards
  cardArray = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const employeeRole = employee.getRole();
    console.log(employeeRole);
    
    if (employeeRole === "Manager") {
      const managerCard = generateManager(employee);

      cardArray.push(managerCard);
    }

    if (employeeRole === "Engineer") {
      const engineerCard = generateEngineer(employee);

      cardArray.push(engineerCard);
    }

    if (employeeRole === "Intern") {
      const internCard = generateIntern(employee);

      cardArray.push(internCard);
    }
  }

  const employeeCards = cardArray.join("");

  const generateTeam = generateTeamProfile(employeeCards);
  return generateTeam;
};

const generateTeamProfile = function (employeeCards) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />
    <title>Team Profile</title>
    </head>

    <body>
    <header>
      <h1 class="d-flex justify-content-center text-light bg-danger pt-4 pb-4">
        My Team
      </h1>
    </header>
    <main>
      <div class="container">
        <div class="row justify-content-center">
            <!-- Team Cards go here -->
            ${employeeCards}
        </div>
      </div>
    </main>
    </body>
    </html>
`;
};

module.exports = generateHtml;