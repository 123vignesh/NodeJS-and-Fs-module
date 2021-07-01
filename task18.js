const fs=require("fs");
const path=require("path");

const konfinity=(pathToFile,secondPath)=>{
 return new Promise((resolve,reject)=>{
     fs.access(pathToFile,(err)=>{
         if(err){
reject("Source File does not exists")
         }else{
         fs.readFile(pathToFile,(err,data)=>{
             if(err){
                 reject(err)
             }else{
                 fs.writeFile(secondPath,data,(err,data)=>{
                     resolve("Content written to file successfully")
                 })
             }
         })
         }
     })
 })

}






module.exports=konfinity
