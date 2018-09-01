function convert(input) {
    if(typeof input !== 'string')
        throw new Error('input must be a string')

    let result = 0;
    let bits = [];
    
    for(let i of input){
        if(i !== '1' && i !== '0')
            throw new Error("input must only include '1' or '0'");
        bits.push(i);
    }

    bits.reverse();

    bits.map(function(x,y){
        if(Number.parseInt(x) !== 0){
            result += Math.pow(2, y);
        }
    });

    return result;
}

module.exports.convert = convert;