const {readExcelFile} = require('../readFile');
const {writeToExcel} = require('../writeFile')

module.exports.program = () => {
    console.log('Select excell with program attendance data');
    let wk_data = readExcelFile();
    let combine = [];
    wk_data.forEach(data => {
        const { Date, Type, Invited, Attended, } = data;

        let invite;
        let attend;
        if (typeof Attended === 'number') {
            if (Attended === 1) {
                attend = 'TRUE';
            }
            if (Attended === 0) {
                attend = 'FALSE';
            }
        }

        if (typeof Attended === 'string') {
            if (Attended.trim() === '') {
                attend = 'FALSE';
            }

            if (Attended.trim() === '-') {
                attend = 'FALSE';
            }

            if (Attended.trim().length === 2) {
                attend = 'FALSE';
            }

            if (Attended.trim() === '1') {
                attend = 'TRUE';
            }

            if (Attended.trim() === '0') {
                attend = 'FALSE';
            }
        }



        if (typeof Invited === 'string') {
            if (Invited.trim() === '') {
                invite = 'FALSE';
            }

            if (Invited.trim().toLowerCase() === 'y') {
                invite = 'TRUE'
            }

            if (Invited.trim().toLowerCase() === 'n') {
                invite = 'FALSE'
            }
        }


        combine.push({
            leapId: data['LEAP ID'],
            Date,
            Type,
            Invited,
            Attended,
            attend,
            invite
        })

    });
    writeToExcel(combine, './output/programAttendance')
}