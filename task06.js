const fs=require("fs");

let pathToFile=__dirname;

let konfinity=(pathToFile)=>{
return new Promise((resolve,reject)=>{
      let obj={
          countJs:"",
          countTxt:"",
          count:"",
          files:""
      }

fs.readdir(pathToFile,(err,data)=>{
    if(err){
        reject("Error occured while reading directory");
    }else{
var common=0;
var count1=0;
var count2=0;
       for(var i=0;i<data.length;i++){
          if((data[i].split("."))[1]==="txt"){
              count1++
          }else if((data[i].split("."))[1]==="js"){
              count2++
          }else{
              common++
          }
 

       }
obj.countJs=count2;
obj.countTxt=count1;
obj.count=common
obj.files=data;
        resolve(obj)
    }
})
})
}

konfinity(pathToFile)
.then(result=>{
    console.log(result);
})
.catch(result=>{
    console.log(result);
})





module.exports=konfinity;
