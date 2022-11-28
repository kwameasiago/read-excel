const prompt = require('prompt-sync')();

module.exports.layOut = (func, title='') => {
    console.log('***************************************************************************************\n');
    console.log(`${title} \n`);
    func()
    console.log('\n***************************************************************************************');
    
}

module.exports.breaker = () => {
    console.log('\n-----------------------------------------------------------------------------------------\n')
}


module.exports.userInput  = (question, attempts, limit) => {
    let res;
    let count = 0
    while(count< attempts){
    let selectedFile = parseInt(prompt(`${question} >> `));
    
    if(selectedFile > limit || isNaN(selectedFile)){
        console.log('Invalid input :(');
        console.log('\n');
        count++
        res = 'Error'
    }
    else{
        res = selectedFile;
        break
    }
    
    
    
    }
    return res;
}