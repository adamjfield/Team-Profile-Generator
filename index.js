// link to generate HTML
const render = require("./src/generateHTML");

// link to employee profiles
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const fs = require("fs");
const inquirer = require("inquirer");

const teamArray = [];
const idArray = [];

function appMenu() {
  function addManagerCard() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the team manager's of this team?",
          validate: (nameInput) => {
            if (!nameInput) {
              console.log("Please enter the manager's name!");
              return false;
            }
            return true;
          },
        },
        {
          type: "input",
          name: "id",
          message: "What is the team manager's id?",
          validate: (nameInput) => {
            if (!nameInput) {
              console.log("Please enter the manger's id!");
              return false;
            }
            return true;
          },
        },
        {
          type: "input",
          name: "email",
          message: "What is the team manager's email?",
          validate: (nameInput) => {
            const emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailValidator.test(nameInput)) {
              return "Please enter a valid email address!";
            }
            return true;
          },
        },
        {
          type: "input",
          name: "officeNumber",
          message: "What is the team manager's office number?",
          validate: (nameInput) => {
            if (!nameInput) {
              console.log("Please enter the manager's office number!");
              return false;
            }
            return true;
          },
        },
      ])
      .then((managerInput) => {
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager(name, id, email, officeNumber);

        teamArray.push(manager);
        idArray.push(manager.id);
        confirmNewEmployee();
      });
  }

  function confirmNewEmployee() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "role",
          message: "Which type of team member would you like to add?",
          choices: [
            "Engineer",
            "Intern",
            "I don't want to add any more team member's",
          ],
        },
      ])
      .then((choice) => {
        switch (choice.role) {
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;
          default:
            writeFile();
        }
      });
  }

  function addEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is your engineer's name?",
          validate: (nameInput) => {
            if (!nameInput) {
              console.log("Please enter name!");
              return false;
            }
            return true;
          },
        },
        {
          type: "input",
          name: "id",
          message: "What is your engineer's id?",
          validate: (nameInput) => {
            if (!nameInput) {
              console.log("Please enter id!");
              return false;
            } else if (idArray.includes(nameInput)) {
              console.log("  **id already exists. Please enter new id**");
              return false;
            }
            return true;
          },
        },
        {
          type: "input",
          name: "email",
          message: "What is your engineer's email?",
          validate: (nameInput) => {
            const emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailValidator.test(nameInput)) {
              return "Please enter a valid email address!";
            }
            return true;
          },
        },
        {
          type: "input",
          name: "github",
          message: "What is your engineer's GitHub username?",
          validate: (nameInput) => {
            if (!nameInput) {
              console.log("Please enter GitHub username!");
              return false;
            }
            return true;
          },
        },
      ])
      .then((employeeData) => {
        let { name, id, email, role, github, school } = employeeData;
        let employee;

        employee = new Engineer(name, id, email, github);

        teamArray.push(employee);
        idArray.push(employee.id);

        return confirmNewEmployee();
      });
  }

  function addIntern() {
    console.log(role);
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is your intern's name?",
          validate: (nameInput) => {
            if (!nameInput) {
              console.log("Please enter name!");
              return false;
            }
            return true;
          },
        },
        {
          type: "input",
          name: "id",
          message: "What is your intern's id?",
          validate: (nameInput) => {
            if (!nameInput) {
              console.log("Please enter id!");
              return false;
            }
            return true;
          },
        },
        {
          type: "input",
          name: "email",
          message: "What is your intern's email?",
          validate: (nameInput) => {
            const emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailValidator.test(nameInput)) {
              return "Please enter a valid email address!";
            }
            return true;
          },
        },
        {
          type: "input",
          name: "school",
          message: "What is your intern's school name?",
          validate: (nameInput) => {
            if (!nameInput) {
              console.log("Please enter school name!");
              return false;
            }
            return true;
          },
        },
      ])
      .then((employeeData) => {
        let { name, id, email, role, github, school } = employeeData;
        let employee;

        employee = new Intern(name, id, email, school);

        teamArray.push(employee);
        idArray.push(employee.id);

        return confirmNewEmployee();
      });
  }

  function writeFile() {
    fs.writeFile("./dist/index.html", render(teamArray), (err) => {
      if (err) {
        console.log(err);
        return;
      } else {
        console.log("Team profile has been generated!");
      }
    });
  }

  addManagerCard();
}

appMenu();
