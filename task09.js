const fs = require("fs");
const path=require("path")
var k=[]
var w=[]
var no=0;
var pathToFile=""
const konfinity=(pathToFile)=>{
   k[0]=pathToFile


   return new Promise((resolve,reject)=>{
         fs.readdir(pathToFile,(err,data)=>{
             if(err){
                  reject("Error occured while traversing directory");
             }else{
                 let obj={
                     countDir:"",
                     countFile:""
                 }
                 var count=0;
                 var count1=0;
                 var e;
                    for(var i=0;i<data.length;i++){
                        var d=data.length
                       if(data[i].split(".")[1]!==undefined){
                               count++
                       }else{
                         var s=0;
                           count1++;
                         o=count1;

net(data[i])
function net(p){
                           leg(p)
                           .then(result=>{
                             s++
                          for(var j=0;j<result.length;j++){
                           
                            if(result[j].split(".")[1]!==undefined){
                                          count++;
                                    }else{
                                        count1++;
                                       
                                  var tago=path.join(p,result[j])
                                  o++
                                        net(tago)
                                    }
                               }
                              
                          obj.countDir=count1;
                    obj.countFile=count;
                     
              
                 if(s===o){
                          resolve(obj);
                 }
                     
                 })
                           .catch(result=>{
                               console.log(result)
                           })
}
                       }
                    }
                    
             }
            
         })
   })


}
/*konfinity()
.then(result=>{
  console.log(result)
})
.catch(result=>{
  console.log(result)
})*/


const leg=async(pathToFile)=>{
  var h =await keg(pathToFile);
   
  return (h) 
}





const keg=(pathToFile)=>{
  const t= path.join(k[0],pathToFile)
  
    return new Promise((resolve,reject)=>{
        fs.readdir(t,(err,data)=>{
            if(err){
                reject("Error occured while traversing file");
            }else{
             
                resolve(data);
            }
        })
    })

}






module.exports=konfinity;
