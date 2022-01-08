const Engineer = require("../lib/Engineer");
//set test
test("Set github username with constructor function", () => {
    const gitUser = "BondJames";
    const employee = new Engineer("James Bond", "007", "email@email.com", gitUser);
    expect(employee.github).toBe(gitUser);
});
//get tests:
test("Get github username with constructor function", () => {
    const gitUser = "BondJames";
    const employee = new Engineer("James Bond", "007", "email@email.com", gitUser);
    expect(employee.github).toBe(gitUser);
});

test("getRole() returns Engineer", () => {
    const role = "Engineer";
    const employee = new Engineer();
    expect(employee.getRole()).toBe(role);
});
//get tests end

//all tests passing