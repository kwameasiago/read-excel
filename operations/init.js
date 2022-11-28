var fs = require('fs');


const createFolder = (dirs) => {
    dirs.forEach(dir => {

        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
    })
}

module.exports.init = () => {
    createFolder(['input', 'output'])
}