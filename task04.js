const fs=require("fs")
var path=""
let konfinity=(path)=>{
    return new Promise((resolve,reject)=>{
       fs.access(path,(err)=>{
           if(err){
               reject("File does not exists")
           }else{
              resolve("File exists")
           }
           
       })
    })
}

konfinity(path)
.then(result=>{
    console.log(result);
})
.catch(result=>{
    console.log(result);
})






module.exports=konfinity;
