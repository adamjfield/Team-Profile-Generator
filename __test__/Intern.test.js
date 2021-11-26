const Intern = require("../lib/Intern");

test("creates an intern object", () => {
  const intern = new Intern("Adam", 10, "adamjfield@gmail.com", "University");

  expect(intern.school).toEqual(expect.any(String));
});

test("gets school from getSchool", () => {
  const intern = new Intern("Adam", 10, "adamjfield@gmail.com", "University");

  expect(intern.getSchool()).toEqual(expect.any(String));
});

test("gets role from getRole", () => {
  const intern = new Intern("Adam", 10, "adamjfield@gmail.com", "University");

  expect(intern.getRole()).toEqual("Intern");
});
