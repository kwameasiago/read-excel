var XLSX = require("xlsx");
let fs = require('fs');
const configs = require('./config');
const {userInput} = require('./utils')





module.exports.selectFile = (selectStatement=null) => {

    var files = fs.readdirSync('./input');
    files.forEach((file, index) => {
        console.log(`${index + 1}: fileName - ${file}`)
    })
    console.log('\n')
    let fileSelected = userInput('Select file from list above eg 1, 2', 3 , files.length);
    console.log(`\n you have selected ${files[fileSelected -1]}`)
    
}