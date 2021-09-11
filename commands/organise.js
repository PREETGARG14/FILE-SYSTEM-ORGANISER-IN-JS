let fs=require("fs");
let path = require("path");
function organiseFn(dirPath) {
    console.log("Organise command implemented for",dirPath) 
    let destPath;
// [SUEDO CODE OF THIS FUNC]
 // 1. input -> directory path given
 // 2. check if path passes as parameter put condition for thAt also

       if(dirPath==undefined)
       {    destPath =process.cwd()
         
           //console.log("Kindly enter correct path")
           return;
       }
       else{
           let doesExist=fs.existsSync(dirPath)
           if(doesExist){
//  3. create -> organised_files -> directory
           destPath = path.join(dirPath,"organised_files")
                if(fs.existsSync(destPath)==false){
                    fs.mkdirSync(destPath)
            }
            
           }
           else {
            console.log("Kindly enter correct path")
            return
           }
       }
 organiseHelper(dirPath,destPath); // this function for 4 & 5 step
//  4. identify categories of  all files present in that input directory ->  
//  5. copy/ cut files to that organised directory inside of any of category folder
}
function organiseHelper(src,dest)
{    // 4. identify categories of  all files present in that input directory ->  
    
   let allFileNames= fs.readdirSync(src)
   //console.log(allFileNames)
   // now after getting all files and folder we have to check if folder then leave it & if file then organise it
   for(let i=0;i<allFileNames.length;i++)
   {
       let eachFileAddress = path.join(src,allFileNames[i])
       let isFile=fs.lstatSync(eachFileAddress).isFile()
       if(isFile)
       {
            //console.log(allFileNames[i]) // here we get all files only 
            let category=getCategory(allFileNames[i])

           //  5. copy/ cut files to that organised directory inside of any of category folder

          // console.log(allFileNames[i],"belongs to ->",category)
           sendFiles(eachFileAddress,dest,category)

       }

   }

}



function sendFiles(srcFilePath,dest,category)
{
    let categoryPath =path.join(dest,category)
    if(fs.existsSync(categoryPath)==false)
        {
            fs.mkdirSync(categoryPath)
        }
    let FileName = path.basename(srcFilePath)
    let destFilePath = path.join(categoryPath,FileName)
    fs.copyFileSync(srcFilePath,destFilePath)
    fs.unlinkSync(srcFilePath)
    console.log(FileName,"copied to",category)
}

function getCategory(name)
{
   let extension = path.extname(name)
   extension =extension.slice(1)
   for(let type in types)
   {
      let currentTypeArray= types[type];
      for(let i=0;i<currentTypeArray.length;i++)
      {
            if(extension==currentTypeArray[i])
                return type
      }
   }
   return "others"
}

module.exports={
    organiseKey:organiseFn
}