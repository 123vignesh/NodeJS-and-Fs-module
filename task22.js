var konfinity=require("./task04");
const fs = require("fs");
const path=require("path");

const ponfinity=(pat)=>{
    return new Promise((resolve,reject)=>{
        konfinity(pat)
        .then(result=>{
          fs.rmdir(pat,(err)=>{
              if(err){
                  reject(err)
              }else{
                  resolve("File exists : Directory removed")
              }
          })
        })
        .catch(result=>{
            reject(`cannot remove directory because : ${result}`)
        })
    })
}








module.exports=ponfinity;
