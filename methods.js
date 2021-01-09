// Array forEach() method:

function myForEachFunction(item, index, arr) {
    arr[index] = item * 10;
}

function forEach(array, callback) {
    for(let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
    if (array === undefined || array.length == 0) {
        console.log('the function is not executed for array elements without values');
    } else {
        return(array);
    }
}

let result = forEach(array1, myForEachFunction);
console.log(result);

// Array filter() method:

function myFilterFunction(item, index, arr) {
    if(item < 20) {
        return item;
    }
}

function filter(array, callback) {
    let endArray = [];
    for(let i = 0; i < array.length; i++) {
        let number = callback(array[i], i, array);
        if(number === array[i]) {
            endArray.push(number);
        }
    }
    if (array === undefined || array.length == 0) {
        console.log('the function is not executed for array elements without values');
    } else {
        return(endArray);
    }
}

let result = filter(array1, myFilterFunction);
console.log(result);

// Array map() method:

function myMapFunction(item, index, arr) {
    return item * 2;
}

function map(array, callback) {
    let endArray = [];
    for(let i = 0; i < array.length; i++) {
        let item = callback(array[i], i, array);
        endArray.push(item);
    }
    if (array === undefined || array.length == 0) {
        console.log('the function is not executed for array elements without values');
    } else {
        return(endArray);
    }
}

let result = map(array1, myMapFunction);
console.log(result);

// Array find() method:

function myFindFunction(item, index, arr) {
    return item < 20;
}

function find(array, callback) {
    for(let i = 0; i < array.length; i++) {
        if(callback(array[i], i, array)) {
            return array[i];
        }
    }
    return undefined;
}

let result = find(array1, myFindFunction);
console.log(result);

// Array findIndex() method:

function myFindIndexFunction(item, index, arr) {
    return item < 20;
}

function findIndex(array, callback) {
    for(let i = 0; i < array.length; i++) {
        if(callback(array[i], i, array)) {
            return i;
        }
    }
    if (array === undefined || array.length == 0) {
        console.log('the function is not executed for array elements without values');
    } else {
        return -1;
    }
}

let result = findIndex(array1, myFindIndexFunction);
console.log(result);

// contains_.contains(list, value, [fromIndex]):
// pluck_.pluck(list, propertyName):
// without_.without(array, *values):

// Returns a copy of the array with all instances of the values removed.

// _.without([1, 2, 1, 0, 3, 1, 4], 0, 1);
// => [2, 3, 4]

let stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];

let array1 = [39, 63, 20, 40];

let _ = {
    contains: (list, value, fromIndex) => {
        if(fromIndex) {
            for(let i = fromIndex; i < list.length; i++) {
                if(value === list[i]) {
                    return true;
                } else {
                    return false;
                }
            }
        } else {
            for(let item of list) {
                if(value === item) {
                    return true;
                } 
            }
        return false;
        }
    }, 
    pluck: (list, propertyName) => {
        let endArray = [];
        for(let item of list) {
            endArray.push(item[propertyName]);
        }
        return endArray;
    }, 
    without: function withoutFunction (array, values) {
        let endArray = [];
        for(let i = 0; i < arguments.length; i++) {
            console.log(arguments[i]);
            for(let i = 0; i < array.length; i++) {
                // console.log(array[i]);
                if (array[i] !== arguments[i]) {
                    endArray.push(array[i]);
                }
            }
            // for (let arg = 1; arg < arguments.length; arg++) {
            //     if(array[i] !== arguments[arg]) {
            //         endArray.push(array[i]);
            //     }
            // }
        }
        return endArray;
    }
}

let result = _.without(array1, 20, 39);
console.log(result);

let result = _.pluck(stooges, 'age');
console.log(result);

let result = _.contains(array1, 39);
console.log(result);









