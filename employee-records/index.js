let employees = [];

function Employee (name,title, salary,){
    this.name = name;
    this["job title"] = title;
    this.salary = salary;
    this.status = "Full Time";
}

Employee.prototype.printEmployeeForm = function(){
    console.log(`Name: ${this.name},  Job Title: ${this["job title"]}, Salary: ${this.salary}, Status: ${this.status} `)
}

let jeff = new Employee("Jeff", 'Jr Developer', "100/hr");
let kim = new Employee("Kim", "Sr Dev", "125/hr");
let bob = new Employee("Bob", "Intern", "10/hr");
bob.status = "Part Time";

jeff.printEmployeeForm();
kim.printEmployeeForm();
bob.printEmployeeForm();


employees.push(jeff,kim,bob);
console.log(employees);