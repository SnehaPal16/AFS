function milna(permission){
    new Promise((resolve , reject) => {
        if(permission == true) resolve("chalo chlte hain");
        reject("permission nhi mili");
    })
}

function movie(moviewName){
    new Promise((resolve , reject) => {
        if(movieName == "RRR") resolve("CHALOOOOOOOO");
        reject("mujhe nhi dekhna");
    })
}

function dinner(mood){
    new Promise((resolve , reject) => {
        if(mood == "good") resolve("bhook lagi hai khaate hai");
        reject("mera mann nhi khaane kaa");
    })
}

milna(true)
.then((data)=>{
    console.log(data);
    return movie("RRR");
})
.then((data)=>{ 
    console.log(data);
    return dinner("good");
}
).then((data)=>{    
    console.log(data);
}
).catch((error)=>{
    console.log(error);
})