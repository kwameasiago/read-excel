let fs = require('fs');

const deleteFolders = (dirs) => {
    dirs.forEach(dir => {
        if (fs.existsSync(dir)) {
            fs.rmSync(dir, { recursive: true, force: true });
        }
    })
}

module.exports.cleanAll = () => deleteFolders(['input', 'output']);
module.exports.cleanOutput = () => deleteFolders(['output']);
module.exports.cleanInput = () => deleteFolders(['input',]);