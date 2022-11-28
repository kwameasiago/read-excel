const {readExcelFile} = require('../selectFile');

module.exports.compareLeapIds = () => {
    const fileOne = readExcelFile();

    const fileTwo = readExcelFile();
    
    console.log(fileOne.length)
    console.log(fileTwo.length)

}