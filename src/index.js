module.exports = function reverse(n) {
    const num = Math.abs(n);
    const numReversed = num.toString().split("").reverse().join("");
    return numReversed;
};
