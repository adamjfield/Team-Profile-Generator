const Employee = require("../lib/Employee");

test("creates an employee object", () => {
  const employee = new Employee("Adam", "adamjfield@gmail.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test("gets name from getName", () => {
  const employee = new Employee("Adam", "adamjfield@gmail.com");

  expect(employee.getName()).toEqual(expect.any(String));
});
