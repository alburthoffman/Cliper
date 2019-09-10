function sum(lst) {
    let total = 0
    for (var i in lst) {
        total += lst[i]
    }
    return total;
};

exports.sum = sum;