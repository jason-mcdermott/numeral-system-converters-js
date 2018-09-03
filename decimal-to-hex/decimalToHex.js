const map = new Map([
    [0, '0'],
    [1, '1'],
    [2, '2'],
    [3, '3'],
    [4, '4'],
    [5, '5'],
    [6, '6'],
    [7, '7'],
    [8, '8'],
    [9, '9'],
    [10, 'A'],
    [11, 'B'],
    [12, 'C'],
    [13, 'D'],
    [14, 'E'],
    [15, 'F']
]);

const base = 16;

function convert(input){
    let result = '';
    let remainders = [];
    let value = input / base;

    while (value > 0)
    {
        let left = value.toString().split(".")[0];
        let right = "0." + value.toString().split(".")[1];

        let remainder = right * base;
        remainders.push(Math.trunc(remainder));
        value = left / base;
    }
            
    for(let r of remainders.reverse())
    {
        result += map.get(r);
    }

    return result;
}

module.exports.convert = convert;