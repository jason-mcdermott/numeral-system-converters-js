function convert(input) {
    if(!Number.isInteger(input))
        throw new Error('input must be an integer');
    
        let result = '';
        let bins = [1];
        let output = [];
        let tail = bins[bins.length - 1];

        while(input > tail){
            let next = tail * 2;
            bins.push(next);
            tail = bins[bins.length - 1];
        }

        let compareTo = input;
        bins.reverse().map(function(curr, idx){
            if(curr <= compareTo){
                output.push(1);
                compareTo = compareTo - curr;
            }else{
                output.push(0);
            }
        });

         // pad with zero's...
         while(output.length % 4 != 0)
         {
             output.splice(0, 0, 0);
         }

        result = output.join('');

    return result;
}

module.exports.convert = convert;