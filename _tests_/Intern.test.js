const Intern = require("../lib/Intern");

test("set school name with constructor function", () => {
    const school = "Wasteland";
    const employee = new Intern(school);
    expect(employee.school).toBe(school);
});

test("getRole() returns Intern", () => {
    const role = "Intern";
    const employee = new Intern(Wasteland);
    expect(employee.getRole()).toBe(role);
});