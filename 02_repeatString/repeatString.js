let strArray = [];

const repeatString = function(string, num) {
    if(num >= 0) {
        for(let i = 0; i < num; i++) {
            strArray.push(string);
        }
        return(strArray.join(""));
    } else {
        return("ERROR")
    }
};

// Do not edit below this line
module.exports = repeatString;
