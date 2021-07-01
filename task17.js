const fs=require("fs");
const path=require("path");


const konfinity=(pathToFile,data)=>{
    return new Promise((resolve,reject)=>{
        fs.access(pathToFile,(err)=>{
            if(err){


               reject("File does not exists provide another name")     
               
            }else{
                
                fs.writeFile(pathToFile,data,(err)=>{
                        if(err){
                              reject("File does not exists provide another name")
                        }else{
                            resolve("Content appended to file successfully")
                        }
                    })
                fs.readFile(pathToFile,(err,content)=>{
                    if(err){
                        reject(err)
                    }else{
                          fs.writeFile(pathToFile,content,(err)=>{
                        if(err){
                              reject(err)
                        }else{
                            resolve("Content appended to file successfully")
                        }
                    })
                    }
                   
                })
            }
        })
    })
}






module.exports=konfinity;
