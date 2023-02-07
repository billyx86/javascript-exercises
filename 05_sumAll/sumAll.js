const sumAll = function(...args) {

    console.log(args);

    for(let i = 0; i < args.length; i++) {
        if(typeof args[i] !== 'number') {
            return("ERROR");
        }
    }

    let answer = 0;
    for(let i = Math.min(...args); i < Math.max(...args) + 1; i++) {
        if(i < 0) {
            return("ERROR");
        }
        answer += i;
    }
    return(answer);

};

// Do not edit below this line
module.exports = sumAll;
