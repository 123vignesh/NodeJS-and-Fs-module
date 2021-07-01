
const fs= require("fs"); 

var fileName=""
let konfinity=(fileName)=>{
return new Promise((resolve,reject)=>{
    fs.stat(fileName,(err,data)=>{
        if(err){
            reject("Error occured while calculating stats");
        }else{
            resolve(data.size);
        }
    })
})
}

konfinity(fileName)
.then(result=>{
    console.log(result);
})
.catch(result=>{
    console.log(result);
})






module.exports=konfinity;
