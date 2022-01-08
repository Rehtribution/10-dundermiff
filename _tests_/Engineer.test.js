const Engineer = require("../lib/Engineer");

//set github username
test("Set github username with constructor function", () => {
    const gitUser = "BondJames";
    const employee = new Engineer("James Bond", "007", "email@email.com", gitUser);
    expect(employee.github).toBe(gitUser);
});
//get github username
test("Get github username with constructor function", () => {
    const gitUser = "BondJames";
    const employee = new Engineer("James Bond", "007", "email@email.com", gitUser);
    expect(employee.github).toBe(gitUser);
});

//get role
test("getRole() returns Engineer", () => {
    const role = "Engineer";
    const employee = new Engineer();
    expect(employee.getRole()).toBe(role);
});

//all tests passing