const fs=require("fs");
const path=require("path")


const konfinity=(pathToFile)=>{
         return new Promise((resolve,reject)=>{
            
                     fs.readFile(pathToFile,(err,data)=>{
                         if(err){
                              reject("File does not exists")
                         }else{
                              resolve(data.toString())
                         }

                              
                     })
                 
      
})
}









module.exports=konfinity
