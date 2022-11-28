const operations = require('./operations');
const {layOut, breaker} = require('./utils');

const opt = process.argv.slice(2);

let listOfOpt = Object.keys(operations);


if(operations[opt[0]]){
    layOut(operations[opt[0]], 'LIST OF FILES');
    breaker();
}
else {    
    console.log('Invalid opt expected one of the fillowing')
    listOfOpt.forEach(item => console.log(item))
}
