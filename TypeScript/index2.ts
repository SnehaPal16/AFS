// DAY 2 ------------------------------>

// let user = {
//     userName : "Sneha",
//     age : 20
// }

// console.log(user.userName);

interface User{
    name : string,
    age : number
}

let user1 : User = {
    name : "Sneha",
    age : 20
}
console.log(user1.name);
user1.age = 21;
console.log(user1.age);

let num : number[] = [1,2,];
num[3] = 3;
console.log(num);

let numStr : (number | string)[] = [];
numStr = [1 , "b" , "c"];

console.log(numStr);

interface Emp{
    id:number,
    ename:string,
    salary:number,
    dep : string,
    getName() : string,
    getSalary() : number
}
let emp : Emp = {
    id:1,
    ename:"Sneha",
    salary:10000000,
    dep:"IT",
    getName: function(){
        return this.ename;                                  
    },
    getSalary: function(){
        return this.salary;
    }
}