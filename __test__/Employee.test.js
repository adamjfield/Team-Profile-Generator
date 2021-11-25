const Employee = require("../lib/Employee");

test("creates an employee object", () => {
  const employee = new Employee("Adam", 10, "adamjfield@gmail.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test("gets name from getName", () => {
  const employee = new Employee("Adam", 10, "adamjfield@gmail.com");

  expect(employee.getName()).toEqual(expect.any(String));
});

test("gets ID from getId", () => {
  const employee = new Employee("Adam", 10, "adamjfield@gmail.com");

  expect(employee.getId()).toEqual(expect.any(Number));
});

test("gets email from getEmail", () => {
  const employee = new Employee("Adam", 10, "adamjfield@gmail.com");

  expect(employee.getEmail()).toEqual(expect.any(String));
});

test("gets role from getRole", () => {
  const employee = new Employee("Adam", 10, "adamjfield@gmail.com");

  expect(employee.getRole()).toEqual("Employee");
});
