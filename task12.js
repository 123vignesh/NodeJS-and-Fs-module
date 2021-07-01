const fs=require("fs")
const path=require("path")

const konfinity=(pathToFile,index)=>{
    return new Promise((resolve,reject)=>{
        fs.readdir(pathToFile,(err,data)=>{
            if(err){
                reject("Error occured while fetching files from Directory");
            }else{
                   var t=path.join(pathToFile,data[index])
                
                fs.readFile(t,(err,content)=>{
                
                  if(err){
                      reject(err)

                  }else{
                      let obj={
                       data:"",
                       filename:""
                   }
                     

                       obj.data=content.toString()
                       obj.filename=data[index]

                        resolve(obj)
                  }
                  
                   
                  
               })
               
            }
               
        })
    })
}








module.exports=konfinity;
