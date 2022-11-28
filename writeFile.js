var fs = require('fs');
let XLSX = require("xlsx");
let moment  = require('moment');
const {userInput, userInputString} = require('./utils');

module.exports.writeToExcel = (data, dir) => {
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir, { recursive: true });
    }
    const fileName =  userInputString('What name would you like to gove the file ');
    let new_workbook = XLSX.utils.book_new();
    let new_worksheet = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(new_workbook, new_worksheet);
    let file = `${dir}/${moment().format('YYMMDD_HH_mm_A')}_${fileName}.xlsx`;
    XLSX.writeFile(new_workbook, file)
}