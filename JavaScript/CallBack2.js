function download(URL , cb) {
//    let movie = URL.split("/").pop();
   setTimeout(() =>{
    let movie = URL.split("/").pop();
    cb(movie);
   } , 1000)

}

function compress(dfile , cb){
    setTimeout(()=>{
        let file = dfile.split(".")[0] + ".zip";    
        cb(file);
    } , 500)
}

function upload(cfile , cb){
    setTimeout(()=>{
        let newUrl = "https://Chitkara.com/" + cfile;    
        cb(newUrl);
    } , 20)
}

download("https://www.movies4u.com/gabbar.mp4", function(dfile){
    console.log("downloaded")
    compress(dfile , function(cfile){
        console.log("compressed")
        upload(cfile , function(){
            console.log("uploaded")
            console.log("task completed")
        })
    })
})