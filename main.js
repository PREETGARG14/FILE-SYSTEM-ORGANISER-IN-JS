#!/usr/bin/env node      
//by this line any os or command line will understand automatically in which environment this program will run ,this is called shebang syntax
//we also install this with nmp  
// after all work we run nmp link
let inputArray = process.argv[2];
/* argv[2] is a array that takes input from index 2 of array ,because 
at argv[0] -> it will store node -> node that we type in integrated terminal
at argv[1] -> it will store file_name.js that we type in integrated terminal  */
inputArray=process.argv.slice(2);  // we pass ->Node input.js Hello how are you 
console.log(inputArray) // this will print array starts at index 2 

let helpObj = require("./commands/help");
let treeObj = require("./commands/tree");
let organiseObj = require("./commands/organise");

// node main.js tree  -> "directoryPath"
// node main.js  organise -> "directoryPath"
//node main.js help

let types = {
    media: ["mp4", "mkv","gif","jpg","png","jpeg"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}

let chalk =require("chalk")
let fs=require("fs");
let path = require("path");
let command= inputArray[0];
switch (command) {
    case "tree":
        treeObj.treeKey(inputArray[1]);
        break;
    case "organize":
        organiseObj.organiseKey(inputArray[1]);
        break;
    case "help":
        helpObj.helpKey();
        break;
    default:
        console.log(chalk.green("👀Please Input Correct Command👀")); 
        break;
}




