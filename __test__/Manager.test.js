const Manager = require("../lib/Manager");

test("creates an manager object", () => {
  const manager = new Manager("Adam", 10, "adamjfield@gmail.com", 1);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("gets officeNumber from getOfficeNumber", () => {
  const manager = new Manager("Adam", 10, "adamjfield@gmail.com", 1);

  expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
});

test("gets role from getRole", () => {
  const manager = new Manager("Adam", 10, "adamjfield@gmail.com", 1);

  expect(manager.getRole()).toEqual("Manager");
});
