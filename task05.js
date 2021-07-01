const fs=require("fs");


let pathToFile = __dirname;
console.log(pathToFile);
var pathi=""
let konfinity=(pathToFile)=>{
return new Promise((resolve,reject)=>{
fs.readdir(pathToFile,(err,data)=>{
    if(err){
        reject("Error occured while reading directory");
    }else{
        resolve(data)
    }
})
})
}

konfinity(pathToFile)
.then(result=>{
    console.log(result);
})
.catch(result=>{
    console.log(result);
})






module.exports=konfinity;
