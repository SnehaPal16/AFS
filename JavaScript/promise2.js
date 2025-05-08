  
let p = new Promise((resolve, reject) => {
    let num = 6;
    if (num >= 6) {
        resolve(num * 5);
    } else {
        reject("Number is not greater than 6");
    }
});

p.then(result => {
    console.log("Result:", result);
}).catch(error => {
    console.log("Error:", error);
});