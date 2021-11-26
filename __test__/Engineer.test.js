const Engineer = require("../lib/Engineer");

test("creates an engineer object", () => {
  const engineer = new Engineer(
    "Adam",
    10,
    "adamjfield@gmail.com",
    "johndoe99"
  );

  expect(engineer.github).toEqual(expect.any(String));
});

test("gets github username from getGithub", () => {
  const engineer = new Engineer(
    "Adam",
    10,
    "adamjfield@gmail.com",
    "johndoe99"
  );

  expect(engineer.getGithub()).toEqual(expect.any(String));
});

test("gets role from getRole", () => {
  const engineer = new Engineer(
    "Adam",
    10,
    "adamjfield@gmail.com",
    "johndoe99"
  );

  expect(engineer.getRole()).toEqual("Engineer");
})