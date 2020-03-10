function compare(a, b) {
    return a - b
}

function compareMax(a, b) {
    return b - a
}

function reducer(summ, el) {
    return summ + el
}

exports.min = function min(array) {
    if (!Array.isArray(array) || !array.length) return 0
    array.sort(compare)
    return array[0];
}

exports.max = function max(array) {
    if (!Array.isArray(array) || !array.length) return 0
    array.sort(compareMax)
    return array[0];
}

exports.avg = function avg(array) {
    if (!Array.isArray(array) || !array.length) return 0
    return array.reduce(reducer) / array.length
}
