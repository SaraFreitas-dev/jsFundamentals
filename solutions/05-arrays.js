/**
 * Determine the location of an item in the array
 */
exports.indexOf = function(arr, item) {
    return arr.findIndex(function(value) {
        return value === item;
    });
};

/**
 * Sum the items of an array
 */
exports.sum = function(arr) {
    return arr.reduce(function(acc, cur) {
        return acc + cur;
    });
};

/**
 * Remove all instances of an item from an array without mutating orignal array
 */
exports.remove = function(arr, item) {
    return arr.filter(function(value) {
        return value !== item;
    });
};

/**
 * Remove all instances of an item from an array by mutating original array
 */
exports.removeWithoutCopy = function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
        while (arr[i] === item) {
            arr.splice(i, 1);
        }
    }

    return arr;
};

/**
 * Add an item to the end of the array
 */
exports.append = function(arr, item) {
    arr.push(item);
    return arr;
};

/**
 * Remove the last item of an array
 */
exports.truncate = function(arr) {
    arr.pop();
    return arr;
};

/**
 * Add an item to the beginning of an array
 */
exports.prepend = function(arr, item) {
    arr.unshift(item);
    return arr;
};

/**
 * Remove the first item of an array
 */
exports.curtail = function(arr) {
    arr.shift();
    return arr;
};

/**
 * Join two arrays together
 */
exports.concat = function(arr1, arr2) {
    return arr1.concat(arr2);
};

/**
 * Add an item to an array in the specified position
 */
exports.insert = function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
};

/**
 * Count the number of occurrences of an item in an array
 */
exports.count = function(arr, item) {
    return arr.reduce(function(acc, cur) {
        return cur === item ? acc + 1 : acc;
    }, 0);
};

/**
 * Find all items which container multiple occurrences in the array
 */
exports.duplicates = function(arr) {
    return arr.reduce(function(acc, cur, index) {
        if (arr.lastIndexOf(cur) !== index && !acc.includes(cur)) {
            acc.push(cur);
        }

        return acc;
    }, []);
};

/**
 * Square each number in the array
 */
exports.square = function(arr) {
    return arr.map(function(value) {
        return value * value;
    });
};

/**
 * Find all occurrenes of an item in an array
 */
exports.findAllOccurrences = function(arr, target) {
    return arr.reduce(function(acc, cur, index) {
        if (cur === target) {
            acc.push(index);
        }

        return acc;
    }, []);
};
