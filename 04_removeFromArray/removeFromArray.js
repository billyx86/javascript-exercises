const removeFromArray = function(...args) {
    const array = args[0];
    const newArray = [];
    array.forEach((item) => {
        if(!args.includes(item)) {
            newArray.push(item);
        }
    })
    return(newArray);
}

/* const removeFromArray = function(array, index) {
    const indexArray = [index];
    for(let i = 0; i < indexArray.length; i++) {
        if(array.includes(indexArray[i])) {
            array.splice(array.indexOf(indexArray[i]), 1);
        }
    }
    return(array);
}; */

// Do not edit below this line
module.exports = removeFromArray;
