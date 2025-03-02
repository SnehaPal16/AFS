"use strict";
// DAY 2 ------------------------------>
let user1 = {
    name: "Sneha",
    age: 20
};
console.log(user1.name);
user1.age = 21;
console.log(user1.age);
let num = [1, 2,];
num[3] = 3;
console.log(num);
let numStr = [];
numStr = [1, "b", "c"];
console.log(numStr);
let emp = {
    id: 1,
    ename: "Sneha",
    salary: 10000000,
    dep: "IT",
    getName: function () {
        return this.ename;
    },
    getSalary: function () {
        return this.salary;
    }
};
