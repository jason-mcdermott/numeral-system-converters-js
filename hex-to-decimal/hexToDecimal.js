
const map = new Map([
    ['0', 0],
    ['1', 1], 
    ['2', 2], 
    ['3', 3], 
    ['4', 4], 
    ['5', 5], 
    ['6', 6], 
    ['7', 7], 
    ['8', 8], 
    ['9', 9], 
    ['A', 10],
    ['B', 11],
    ['C', 12],
    ['D', 13],
    ['E', 14],
    ['F', 15]
]);

const base = 16;

function convert(input)
{
    let ints = [];
    let result = 0;

    for (let c of input)
    {
        ints.push(map.get(c));
    }

    ints.reverse();

    for (let i = 0; i < ints.length; i++)
    {
        if (ints[i] != 0)
        {
            result += ints[i] * Math.pow(base, i);
        }
    }

    return result;
}

module.exports.convert = convert;