const fs=require("fs");

let newPath=""
let konfinity=(newPath)=>{
    
    console.log(newPath);
return new Promise((resolve,reject)=>{
fs.stat(newPath,(err,data)=>{
    if(err){
        reject( "Error occured while calculating stats");
    }else{
        let stats={
             birthTime:"",
             modifiedTime:"",
             size:"",
             type:data.isFile()?"File":"Directory"
        }
        stats.birthTime=data.birthtimeMs;
        stats.modifiedTime=data.mtimeMs;
        stats.size=data.size;
console.log(stats)
        resolve(stats);
    }
})
})
}

konfinity(newPath)
.then(result=>{
    console.log(result);
})
.catch(result=>{
    console.log(result);
})





module.exports=konfinity;
