var XLSX = require("xlsx");
let fs = require('fs');
const configs = require('./config');
const {userInputInt} = require('./utils');





module.exports.readExcelFile = (fileOptions ={}, workbookOptions={}) => {``

    try {
        var files = fs.readdirSync('./input');
    files.forEach((file, index) => {
        console.log(`${index + 1}: fileName - ${file}`)
    })
    console.log('\n')
    let fileSelected = userInputInt('Select file from list above eg 1, 2', 3 , files.length);
    console.log(`\n you have selected ${files[fileSelected -1]}`)

    let pathToFile = `./input/${files[fileSelected -1]}`;
    
    
    const workbook = XLSX.readFile(pathToFile, fileOptions);

    let wk_sheets = workbook.SheetNames;

    wk_sheets.forEach((file, index) => {
        console.log(`${index + 1}: worksheets - ${file}`)
    })
    console.log('\n')

    let workSheetSelected = userInputInt('Select worksheet', 3 , wk_sheets.length);
    
    console.log(`\n you have selected ${wk_sheets[workSheetSelected -1]}`);
    console.log('\n')

    let wk_data = XLSX.utils.sheet_to_json(workbook.Sheets[wk_sheets[workSheetSelected -1]], workbookOptions);

    return wk_data;
    
    } catch (error) {
        console.log(error)
     return ['an error occured']  
    }

}