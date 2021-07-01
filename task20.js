var konfinity=require("./task04");
const fs=require("fs");
const path=require("path");

const ponfinity=(sour,des)=>{
    return new Promise((resolve,reject)=>{
        konfinity(sour)
        .then(result=>{
               fs.appendFile(sour,des,(err)=>{
                   if(err){
                       reject(err)
                   }else{
                       resolve("Data appended successfully")
                   }
               })
        })
        .catch(result=>{
              reject( `Cannot append data because : ${result}`)
        })
    })
}





module.exports=ponfinity
