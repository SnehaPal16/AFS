function Person(name , age) {
    this.name = name;
    this.age = age;
    this.getName = function() {
        console.log(this.name);
    }
    this.getAge = function() {
        console.log(this.age);
    }
}

function employee(salary) {
    this.salary = salary;
    this.getSalary = function() {
        console.log(this.salary);
    }
}
let p1 = new Person('John', 25);
let emp = new employee(50000000);

p1.__proto__ = emp;
p1.getSalary();