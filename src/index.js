module.exports = function toReadable (number) {
    const x = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero'];
    const y = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const z = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const n = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let str = '';

    for ( let i = 0; i < String(number).length; i++) {
        for ( let j = 0; j < n.length; j++) {
            if (String(number)[i] === n[j]) {
                if (String(number).length === 1 && String(number)[0] === '0') str = x[9];
                if (String(number).length === 1 && String(number)[0] !== '0') str = x[j-1];
                if (String(number).length === 3) {

                    if (i === 0) str = x[j - 1] + ' hundred';
                    if (i === 1 && String(number)[i] !== '0'){
                        if (String(number)[2] === '0' && String(number)[1] !== '0') str = str + ' ' + z[j - 1];
                        if (String(number)[1] !== '1' && String(number)[2] !== '0') str = str + ' ' + z[j - 1];
                    }

                    if (i === 2 && String(number)[1] !== '1' && String(number)[i] !== '0') str = str + ' ' + x[j - 1];
                    if (i === 2 && String(number)[1] === '1' && String(number)[i] !== '0') str = str + ' ' + y[j - 1];
                    if (i === 0 && String(number)[1] === '0' && String(number)[2] === '0') str = x[j - 1] + ' hundred';
                }

                if (String(number).length === 2) {
                    if (i === 0) str = z[j-1];
                    if (i === 1 && String(number)[0] === '1' && j !== 0) str = y[j - 1];
                    if (i === 1 && String(number)[0] !== '1' && String(number)[1] !== '0') str = str + ' ' + x[j - 1];
                }
            }
        }
    }

    return str;
};
