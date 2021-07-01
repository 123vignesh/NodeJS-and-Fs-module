const fs=require("fs");
const path=require("path");



const konfinity=(pathToFile)=>{
    var count1=0;
var countl=0;


    return new Promise((resolve,reject)=>{
        

        fs.readdir(pathToFile,(err,data)=>{
            if(err){
                reject("Error occured while reading directory")
            }else{
                 let obj={
            
            countDir:0,
            countFile:0,
            files:""
        }
       
             for(var i=0;i<data.length;i++){
                //console.log(i);
                 if((data[i].split("."))[1]!==undefined){
                     //console.log(i+" "+"file")
                     count1++
                 }else {
                     //console.log(i+" "+"directory")
                     countl++
                     //console.log(countl);
                 }
             }
              obj.countDir=countl;
     obj.countFile=count1;
     obj.files=data;
     resolve(obj);
            }
            })
    })
          
        }
          
       



module.exports=konfinity;





