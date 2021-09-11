function helpFn() {
    console.log(`List of all yhe commands:
                        node main.js tree  -> "directoryPath"
                        node main.js  organise -> "directoryPath"
                        node main.js help`)   
}
/* in func helpFn we pass multiple line string by the use of ``-> backtick ,
but in javascript only allow single line string ,so by use of `->backtick we can 
pass multiple line string */
module.exports={
    helpKey:helpFn
}