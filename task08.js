const fs =require("fs");
const path = require('path');
var c=0
var p=[]


const konfinity=(pathToFile="./contents")=>{

  return new Promise((resolve,reject)=>{
    
fs.readdir(pathToFile,(err,data)=>{
 //console.log(pathToFile)
        if(err){
            reject("Error occured while reading directory")
        }else{
           
          if(pathToFile.split("/")[1]!==undefined){
               
           resolve(data);
              }
          
          //if(pathToFile.split("/")[1]===undefined){
             
            for(var i=0;i<data.length;i++){
              
                if(data[i].split(".")[1]===undefined){
                  
               var c=path.join(pathToFile,data[i]);
               //console.log("hi")
               //console.log(c)
                     t=i
                  konfinity(c).then(result=>{
                     //console.log(result+" "+"hi")
                    p.splice(t,0,result);
                    
                    if(i===data.length){
                      //console.log(p)  
                    //resolve(p)
                    }
                  })  ;
                  
                  }else{
                    p.push(data[i]);
                  }
                   
                      }
                       
             //}
            
             
      }

                   

           
        })
              

    })
    
    

}


konfinity()
.then(result=>{
    console.log(result);
})
.catch(result=>{
    console.log(result);
})





module.exports=konfinity
