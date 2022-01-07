const Engineer = require("../lib/Engineer");

test("ability to set github username with constructor function", () => {
    const github = "Mad Max";
    const employee = new Engineer(github);
    expect(employee.github).toBe(github);
});
test("getRole() returns Engineer", () => {
    const role = "Engineer";
    const employee = new Engineer(madmax);
    expect(employee.getRole()).toBe(role);
});