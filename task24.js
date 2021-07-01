const fs=require("fs")

const konfinity=(path)=>{
    return new Promise((resolve,reject)=>{
        fs.unlink(path,(err)=>{
            if(err){
                 reject("error deleting file")
            }else{
                resolve("File deleted successfully")
            }
        })
    })
}







module.exports=konfinity;
