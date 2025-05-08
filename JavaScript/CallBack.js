function starter(cb){
    // cb->maincourse
    setTimeout(()=>{
        console.log("starter is serverd")
        cb()
    },2000)
    
}

function drinks(cb){
    setTimeout(()=>{
        console.log("drink is prepared")
        cb();
    },1000)
}

function maincourse(cb){
    setTimeout(()=>{
        console.log("maincourse is prepared")
        cb()
    },3000)
}

function sweets(cb){
    setTimeout(()=>{
        console.log("sweets is prepared")
        cb();
    },500)
}

function bill(cb){
    setTimeout(()=>{
        console.log("Pay bill")
        cb()
    },1000)
}

starter(function(){
    maincourse(function(){ 
        drinks(function(){
            sweets(function(){
                bill(function(){
                    console.log("All done")
                })
            })
        })
    })
})   