// Write your solution in this file!
//Update Employee with Key and Value
const employee = {
    name: "Sam",
    streetAddress: "Prudential Estate Rd",
}
console.log(employee)

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value,
    };

}
const newObj = updateEmployeeWithKeyAndValue(employee, "streetAddress", "Mushroom Rd")
console.log(newObj)


//Destructively Update Employee with Key and Value
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;

    return obj;
}
const newObj1 = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway')
console.log(newObj1)
console.log(employee.streetAddress)
console.log(employee)

//Non Destructively Delete Employee with Key and Value

function deleteFromEmployeeByKey(employee, key) {
    //Create a new object named newEmployee using spread operator
    const newEmployee = { ...employee }
    //delete the name from the new object. This leaves the employee obj as it was
    delete newEmployee.name
    return newEmployee

}

deleteFromEmployeeByKey(employee, "sam")


function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name
    return employee

}

console.log(destructivelyDeleteFromEmployeeByKey(employee, "sam"))