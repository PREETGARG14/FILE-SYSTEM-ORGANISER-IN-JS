let fs=require("fs");
let path = require("path");
function treeFn(dirPath) {
    console.log("Tree command implemented for",dirPath)   
    let destPath;
    
           if(dirPath==undefined)
           {    // this method catch the recent current directory for which it is checking 
               treeHelper(process.cwd(),"")
              // console.log("Kindly enter correct path")
               return;
           }
           else{
               let doesExist=fs.existsSync(dirPath)
               if(doesExist){
                    treeHelper(dirPath,"")
                }
               
               else {
                console.log("Kindly enter correct path")
                return
               }
           }
}

function  treeHelper(dirPath,indent)
{    // check for file or folder
    let isFile =   fs.lstatSync(dirPath).isFile();
    if(isFile==true)
    {
        let FileName=path.basename(dirPath)
        console.log(indent+"├──"+ FileName)
    }
    else{
        let dirName =path.basename(dirPath)
            console.log(indent +"└──"+dirName)
            let childrens = fs.readdirSync(dirPath);
            for (let i = 0; i < childrens.length; i++) {
                let childPath = path.join(dirPath, childrens[i]);
                treeHelper(childPath, indent + "\t");
            }
    }
}

module.exports={
    treeKey:treeFn
}