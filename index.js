// link to generate HTML
const generateHtml = require("./src/generateHTML");

// link to employee profiles
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const fs = require("fs");
const inquirer = require("inquirer");

const teamArray = [];

const addManagerCard = () => {
  return inquirer
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
        message: "What is the team managers id?",
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
        message: "What is the team manger's email?",
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
    });
};

const addEmployee = () => {
  return inquirer
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
      {
        type: "input",
        name: "name",
        message: ({ role }) => `What is your ${role}'s name?`,
        when: ({ role }) =>
          role != "I don't want to add any more team member's",
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
        message: ({ role }) => `What is your ${role}'s id?`,
        when: ({ role }) =>
          role != "I don't want to add any more team member's",
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
        message: ({ role }) => `What is your ${role}'s email?`,
        when: ({ role }) =>
          role != "I don't want to add any more team member's",
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
        message: ({ role }) => `What is your ${role}'s GitHub username?`,
        when: ({ role }) => role === "Engineer",
        validate: (nameInput) => {
          if (!nameInput) {
            console.log("Please enter GitHub username!");
            return false;
          }
          return true;
        },
      },
      {
        type: "input",
        name: "school",
        message: ({ role }) => `What is your ${role}'s school name?`,
        when: ({ role }) => role === "Intern",
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

      if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);
      }

      if (role === "Intern") {
        employee = new Intern(name, id, email, school);
      }

      teamArray.push(employee);

      if (role === "I don't want to add any more team member's") {
        return teamArray;
      } else {
        return addEmployee(teamArray);
      }
    });
};

const writeFile = (data) => {
  fs.writeFile("./dist/index.html", data, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Team profile has been generated!");
    }
  });
};

addManagerCard()
  .then(addEmployee)
  .then((teamArray) => {
    return generateHtml(teamArray);
  })
  .then((pageHtml) => {
    return writeFile(pageHtml);
  })
  .catch((err) => {
    console.log(err);
  });
