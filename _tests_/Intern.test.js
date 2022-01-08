const Intern = require("../lib/Intern");

//set school name
test("set school name with constructor function", () => {
    const testVal = "Secret Agent University";
    const employee = new Intern("James Bond", "007", "email@email.com", testVal);
    expect(employee.school).toBe(testVal);
});

//get school
test("set school name with constructor function", () => {
    const testVal = "Secret Agent University";
    const employee = new Intern("James Bond", "007", "email@email.com", testVal);
    expect(employee.getSchool()).toBe(testVal);
});

//get role
test("getRole() returns Intern", () => {
    const role = "Intern";
    const employee = new Intern("James Bond", "007", "email@email.com","Wasteland");
    expect(employee.getRole()).toBe(role);
});

//all tests passing