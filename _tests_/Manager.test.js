const Manager = require("../lib/Manager");

//set office number
test("Set goffice number with constructor function", () => {
    const testVal = "1989";
    const employee = new Manager("James Bond", "007", "email@email.com", testVal);
    expect(employee.officeNumber).toBe(testVal);
});

//get office number
test("get office number", () => {
    const officeNum = "1989";
    const employee = new Manager("James Bond", "007", "email@email.com", officeNum);
    expect(employee.getOfficeNumber()).toBe(officeNum);
});

//get role
test("getRole() returns Manager", () => {
    const role = "Manager";
    const employee = new Manager("1989");
    expect(employee.getRole()).toBe(role);
});

//all tests passing