const fs=require("fs");
const path=require("path");

const konfinity=(path)=>{
    return new Promise((resolve,reject)=>{
        fs.mkdir(path,(err)=>{
            if(err){
                reject("Error occured while making directory")
            }else{
                resolve("New directory created")
            }
        })
    })
}







module.exports=konfinity;
