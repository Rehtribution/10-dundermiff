const Employee = require("../lib/Employee");

//the set tests:
test("set name with constructor function", () => {
    const name = "James Bond";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test("set ID with constructor function", () => {
    const testVal = "007";
    const employee = new Employee("James Bond", testVal);
    expect(employee.id).toBe(testVal);
});

test("set email with constructor function", () => {
    const testVal = "email@email.com";
    const employee = new Employee("James Bond", "007", testVal);
    expect(employee.email).toBe(testVal);
});
//set tests end

//the get tests:
test("Get name with getName function", () => {
    const testVal = "James Bond";
    const employee = new Employee(testVal);
    expect(employee.getName()).toBe(testVal);
});

test("Get ID with constructor function", () => {
    const testVal = "007";
    const employee = new Employee("James Bond", testVal);
    expect(employee.getId()).toBe(testVal);
});

test("Get email with constructor function", () => {
    const testVal = "email@email.com";
    const employee = new Employee("James Bond", "007", testVal);
    expect(employee.getEmail()).toBe(testVal);
});

test("Get role with constructor function", () => {
    const testVal = "Employee";
    const employee = new Employee("James Bond", "007", "email@email.com");
    expect(employee.getRole()).toBe(testVal);
});
//get tests end

//all tests passing