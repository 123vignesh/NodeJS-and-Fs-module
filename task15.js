const fs=require("fs");
const path=require("path")

const konfinity=(fileName,data)=>{
    return new Promise((resolve,reject)=>{
        fs.writeFile(fileName,data,(err)=>{
            if(err){
                reject("Error writing content in file")
            }else{
                resolve("Content written to file successfully")
            }
        })
    })
}







module.exports=konfinity;
