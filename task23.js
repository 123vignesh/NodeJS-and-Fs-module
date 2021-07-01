const fs=require("fs");
const path=require("path");
const taskF=require("./task04");
const taskTo=require("./task21");
const taskTt=require("./task22");

const mersal=(path)=>{
    return new Promise((resolve,reject)=>{
        taskF(path)
        .then(result=>{
              fs.rmdir(path,(err)=>{
                  if(err){
                      reject(err)
                  }else{
                      resolve( "File exists : Directory removed")
                  }
              })
        })
        .catch(result=>{
             taskTo(path)
             .then(result=>{
                 var b=result;
                 taskTt(path)
                 .then(result=>{
                     resolve( "New directory created : Directory removed")
                 })
             })
        })
    })
}









module.exports=mersal;
