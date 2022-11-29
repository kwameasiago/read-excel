const {readExcelFile} = require('../readFile');
const {writeToExcel} = require('../writeFile')

module.exports.transcript = () => {
    console.log('Select excell with transcript data');
    wk_data =  readExcelFile();

    let res = [];

    wk_data.forEach(item => {
        let key = Object.keys(item);
        let value = Object.values(item)
        let leapId;
        key.forEach((item, index) => {
            if (index === 0){
                leapId = value[0]
            }else{
                if(value[index] != '-'){
                    res.push({
                        'LEAP ID': leapId,
                        'Academic Year': item.split(' ')[0][1],
                        'Term': item.split(' ')[2],
                        'GPA': value[index]
                    })
                }
            }
        })
    })
    writeToExcel(res, './output/transcript')
    return res;
}