const Intern = require("../lib/Intern");

//set test
test("set school name with constructor function", () => {
    const testVal = "Secret Agent University";
    const employee = new Intern("James Bond", "007", "email@email.com", testVal);
    expect(employee.school).toBe(testVal);
});

//get tests:
test("set school name with constructor function", () => {
    const testVal = "Secret Agent University";
    const employee = new Intern("James Bond", "007", "email@email.com", testVal);
    expect(employee.getSchool()).toBe(testVal);
});

test("getRole() returns Intern", () => {
    const role = "Intern";
    const employee = new Intern("James Bond", "007", "email@email.com","Wasteland");
    expect(employee.getRole()).toBe(role);
});
//get tests end

//all tests passing