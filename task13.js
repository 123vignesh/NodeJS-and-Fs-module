const fs=require("fs");
const path=require("path");

const konfinity=(pathToFile,index)=>{
    return new Promise((resolve,reject)=>{
        fs.readdir(pathToFile,(err,data)=>{
            if(err){
                reject( "Error occured while fetching files from Directory");
            }else{
                let obj={
                    data:"",
                    size:"",
                    birthTime:"",
                    filename:""
                }
                obj.filename=data[index]
          var t=path.join(pathToFile,data[index])
             fs.readFile(t,(err,content)=>{
                   if(err){
                       reject("Error occured while fetching files from Directory")
                   }else{
                       obj.data=content.toString()
                   }
                 fs.stat(t,(err,stats)=>{
                 if(err){
                       reject("Error occured while fetching files from Directory")
                 }else{
                     obj.size=stats.size;
                     obj.birthTime=stats.birthtimeMs
                 }
                 resolve(obj)
             })



             })

             


                
            }
        })
    })
}






module.exports=konfinity;
