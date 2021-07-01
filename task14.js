const fs=require("fs");
const path=require("path");

const konfinity=(pathToFile)=>{
         return new Promise((resolve,reject)=>{
             fs.readFile(pathToFile,(err,data)=>{
                
                 if(err){
                     reject("Error reading file")
                 }else{
                      let obj={
                     functionCount:"",
                     variableCount:""
                 }
                     var count=0;
                     var count1=0;
                 var f=data.toString()
                 var h=f.split(/\n| /)
                 //console.log(h)
                     for(var i=0;i<h.length;i++){
                 if(h[i]==="function" || h[i]==="=>"){
                     console.log(h[i])
                     count++
                 }else if(h[i]==="let"|| h[i]==="var" || h[i]==="const" ){
                     console.log(h[i])
                     count1++
                 }
             }

             obj.functionCount=count;
             obj.variableCount=count1;
             resolve(obj)
                 }
           


             })
         })
}







module.exports=konfinity;
