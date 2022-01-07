const Manager = require("../lib/Manager");

test("ability to set goffice number with constructor function", () => {
    const officeNum = "1989";
    const employee = new Manager(officeNum);
    expect(employee.officeNum).toBe(officeNum);
});
test("getRole() returns Manager", () => {
    const role = "Manager";
    const employee = new Manager(1989);
    expect(employee.getRole()).toBe(role);
});