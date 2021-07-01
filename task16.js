const fs=require("fs")
const path=require("path")

const konfinity=(pathToFile,data)=>{
    return new Promise((resolve,reject)=>{

           fs.access(pathToFile,(err)=>{
               if(err){
                   
                    fs.writeFile(pathToFile,data,(err)=>{
                 if(err){
                     reject("File already exists provide another name");
                 }else{
                     resolve("Content written to file successfully")
                 }
             })

               }else{
                   reject("File already exists provide another name");

                  
               }
             


           })
          
            

             
    })
}






module.exports=konfinity;
