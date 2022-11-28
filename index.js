const operations = require('./operations');
const {layOut, breaker} = require('./utils');

const opt = process.argv.slice(2);
console.log(operations)

if(operations[opt[0]]){
    layOut(operations[opt[0]], 'LIST OF FILES');
    breaker();
}
else {
    let listOfOpt = Object.keys(operations);
    console.log('invalid opt expected one of the fillowing')
    console.log(listOfOpt)
}
