/**
 * Reduce duplicate characters to a desired minimum
 */
exports.reduceString = function(str, amount) {

    var count = 0;
    var reduced = '';

    str.split('').reduce(function(prev, cur) {

        count = (prev === cur ? count + 1 : 1);

        if (prev !== cur || count <= amount) {
            reduced += cur;
        }

        return cur;

    }, null);

    return reduced;
};

/**
 * Wrap lines at a given number of columns without breaking words
 */
exports.wordWrap = function(str, cols) {

    var wrap = false;
    var index = 0;

    return str.split('').map(function(char) {

        if (!wrap) {
            wrap = ((index + 1) % cols === 0 ? true : false);
        }

        index++;

        if (wrap && char === ' ') {
            wrap = false;
            index = 0;
            return '\n';
        }

        return char;

    }).join('');
};

/**
 * Reverse a String
 */
exports.reverseString = function(str) {

    return str.split('').reverse().join('');
};

exports.palindrome = function(str) {

    // return str === exports.reverseString(str);

    var end = str.length - 1;

    if (str.length <= 1) {
        return true;
    }

    if (str.charAt(0) !== str.charAt(end)) {
        return false;
    }

    return exports.palindrome(str.substr(1, str.length - 2));

};
