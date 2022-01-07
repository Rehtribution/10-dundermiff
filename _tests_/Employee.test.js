const Employee = require("../lib/Employee");

test('creates a employee object', () => {
    const e = new Employee('object');
    expect(typeof(e)).toBe('object');
    
});

test("ability to set name with constructor function", () => {
    const name = "James Bond";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});
test("ability to set ID with constructor function", () => {
    const id = "007";
    const employee = new Employee(id);
    expect(employee.id).toBe(id);
});
test("ability to set name with constructor function", () => {
    const email = "email@email.com";
    const employee = new Employee(email);
    expect(employee.email).toBe(email);
});
test("ability to set role with constructor function", () => {
    const role = "employee";
    const employee = new Employee(role);
    expect(employee.role).toBe(role);
});

