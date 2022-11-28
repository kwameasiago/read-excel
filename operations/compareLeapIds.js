const {readExcelFile} = require('../readFile');
const {writeToExcel} = require('../writeFile')

module.exports.compareLeapIds = () => {
    console.log('Select leap id from kiongozi system')
    const kiongozi = readExcelFile().map(x => x['LEAP ID']);;
    console.log('Select leap id from CF system')
    const cf = readExcelFile().map(x => x['LEAP ID']);

    let res = [];
    console.log(kiongozi.length, cf.length)
    cf.forEach((item, index) => {
        if(!kiongozi.includes(item)){
            console.log(`${index+1} ${item} does not exist in CF model file`)
            res.push(item)
        }else {
            console.log(`${index+1} ${item}  exists in CF model file`)
        }
    });
    writeToExcel(res.map(x => ({'LEAP ID': x})), './output/compareLeapId')
    return res;
}