// Employee object with initial properties
let employee = {
    name: "Alice",
    streetAddress: "123 Main St"
};
// 1. Non-destructive update (creates a new object)
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value }; // Returns a new object with updated key-value
}

// 2. Destructive update (modifies the original object)
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; // Directly modifies employee
    return employee;
}

// 3. Non-destructive delete (creates a new object)
function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee }; // Clone the object
    delete newEmployee[key]; // Delete the property
    return newEmployee; // Return the modified object
}

// 4. Destructive delete (modifies the original object)
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; // Directly deletes the property
    return employee;
}

