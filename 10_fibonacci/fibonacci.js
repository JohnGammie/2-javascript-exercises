const fibonacci = function(num) {
    if (num == 0) {
        return 0;
    }
    if (num < 0) {
        return 'OOPS';
    }
    let sequence = [1, 1];
    num = parseInt(num);
    for (let i = 0; i < num - 2; i++) {
        sequence.push(sequence[i]+sequence[i+1]);
    }

    console.log(sequence);
    return sequence[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
