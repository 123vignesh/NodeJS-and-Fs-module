const path=require("path")

let konfinity=(pathToFile,pos,str)=>{
let obj={
    baseName:"",
    dirName:"",
    finalPath:""
}
obj.baseName=path.basename(pathToFile);
obj.dirName=path.dirname(pathToFile);
if(pos==="start"){
obj.finalPath=path.join(str,pathToFile);
}else{
obj.finalPath=path.join(pathToFile,str)
}

return obj;
}









module.exports=konfinity;
