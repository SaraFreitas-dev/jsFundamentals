/**
 * Convert a binary String to a Number
 */
exports.binaryToDecimal = function(str) {
    return parseInt(str, 2);
};

/**
 * Add two Numbers with a precision of 2
 */
exports.add = function(a, b) {

    var MULTIPLIER = Math.pow(10, 2);

    return (a * MULTIPLIER + b * MULTIPLIER) / MULTIPLIER;

};

/**
 * Multiply two Numbers with a precision of 4
 */
exports.multiply = function(a, b) {

    var MULTIPLIER = Math.pow(10, 4);

    var preciseA = Number.parseFloat(a.toPrecision(4));
    var preciseB = Number.parseFloat(b.toPrecision(4));

    return ((preciseA * MULTIPLIER) * (preciseB * MULTIPLIER)) / MULTIPLIER / MULTIPLIER;

};
