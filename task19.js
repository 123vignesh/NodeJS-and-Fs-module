var konfinity=require("./task04");
const fs=require("fs");
const path=require("path")

const ponfinity=(sour,des)=>{
 
    return new Promise((resolve,reject)=>{
    konfinity(des)
    .then(result=>{
        
         reject(`cannot copy data : ${result}`)
    })
    .catch(result=>{
       
                fs.copyFile(sour,des,(err)=>{
                    if(err){
                       reject(result);
                    }else{
                        resolve( "Content copied successfully")
                    }
                })

    })
        
    })
}





module.exports=ponfinity;
