'use strict';

let emp1 = { 
    ID: getEmployeeID(), 
    name: "Ghazi Samer", 
    department: "Administration", 
    level: "Senior", 
    image: "", 
} 
emp1.salary = calculateEmployeeSalary(emp1.level); 
let emp2 = { 
    ID: getEmployeeID(), 
    name: "Lana Ali", 
    department: "Finance", 
    level: "Senior", 
    image: "", 
} 
emp2.salary = calculateEmployeeSalary(emp2.level); 
let emp3 = { 
    ID: getEmployeeID(), 
    name: "Tamara Ayoub", 
    department: "Marketing", 
    level: "Senior", 
    image: "", 
} 
emp3.salary = calculateEmployeeSalary(emp3.level); 
let emp4 = { 
    ID: getEmployeeID(), 
    name: "Safi Walid", 
    department: "Administration", 
    level: "Mid-Senior", 
    image: "", 
} 
emp4.salary = calculateEmployeeSalary(emp4.level); 
let emp5 = { 
    ID: getEmployeeID(), 
    name: "Omar Zaid", 
    department: "Development", 
    level: "Senior", 
    image: "", 
} 
emp5.salary = calculateEmployeeSalary(emp5.level); 
let emp6 = { 
    ID: getEmployeeID(), 
    name: "Rana Saleh", 
    department: "Development", 
    level: "Junior", 
    image: "", 
} 
emp6.salary = calculateEmployeeSalary(emp6.level); 
let emp7 = { 
    ID: getEmployeeID(), 
    name: "Hadi Ahmed", 
    department: "Finance", 
    level: "Mid-Senior", 
    image: "", 
} 
emp7.salary = calculateEmployeeSalary(emp7.level); 
 
function getEmployeeID() { 
    // for testing 
    let x = Math.ceil(Math.random() * (9999 - 1000)) + 1000; 
    console.log(`id = ${x}`); 
 
    return Math.ceil(Math.random() * (9999 - 1000)) + 1000; 
} 
 
function calculateEmployeeSalary(employeeLevel) { 
    let salary = 0; 
    let netSalary = 0; 
    switch (employeeLevel) { 
        case "Senior": 
            salary = Math.ceil(Math.random() * (2000 - 1500)) + 1500; 
 
            // for testing 
            console.log(salary); 
            break; 
        case "Mid-Senior": 
            salary = Math.ceil(Math.random() * (1500 - 1000)) + 1000; 
 
            // for testing 
            console.log(salary); 
            break; 
        case "Junior": 
            salary = Math.ceil(Math.random() * (1000 - 500)) + 500; 
 
            // for testing 
            console.log(salary); 
            break; 
        default: 
            console.log("Invalid level"); 
    } 
    netSalary = salary - (salary * 7.5 / 100); 
    return netSalary; 
} 
 
function renderEmployeeInfo() { 
    let employeeInfo = document.getElementById("employee-info"); 
    employeeInfo.innerHTML = ` 
    <h2>Employees Info:</h2><br> 
    <p> 
        Employee Name: ${emp1.name}<br> 
        Employee Salary: ${emp1.salary} 
    </p><br> 
    <p> 
        Employee Name: ${emp2.name}<br> 
        Employee Salary: ${emp2.salary} 
    </p><br> 
    <p> 
        Employee Name: ${emp3.name}<br> 
        Employee Salary: ${emp3.salary} 
    </p><br> 
    <p> 
        Employee Name: ${emp4.name}<br> 
        Employee Salary: ${emp4.salary} 
    </p><br> 
    <p> 
        Employee Name: ${emp5.name}<br> 
        Employee Salary: ${emp5.salary} 
    </p><br> 
    <p> 
        Employee Name: ${emp6.name}<br> 
        Employee Salary: ${emp6.salary} 
    </p><br> 
    <p> 
        Employee Name: ${emp7.name}<br> 
        Employee Salary: ${emp7.salary} 
    </p> 
` 
} 
 
renderEmployeeInfo();