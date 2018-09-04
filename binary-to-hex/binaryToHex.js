
const map = new Map([
    ['0000', '0'],
    ['0001', '1'],
    ['0010', '2'],
    ['0011', '3'],
    ['0100', '4'],
    ['0101', '5'],
    ['0110', '6'],
    ['0111', '7'],
    ['1000', '8'],
    ['1001', '9'],
    ['1010', 'A'],
    ['1011', 'B'],
    ['1100', 'C'],
    ['1101', 'D'],
    ['1110', 'E'],
    ['1111', 'F']
]);

function convert(input){
    
    let result = '';
    let nibbles = getChunks(input, 4);

    for (var nibble of nibbles){
        result += map.get(nibble);
    }

    return result;
}

function getChunks(value, chunkSize){
    
    let chunks = [];

    for (let i = 0; i < value.length; i += chunkSize){
        if (i + chunkSize > value.length){
            chunks.push(value.substr(i));
        } else {
            chunks.push(value.substr(i, chunkSize));
        }   
    }   

    return chunks;
}

module.exports.convert = convert;