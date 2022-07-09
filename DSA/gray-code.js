/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
    let codeBinary = genGrayCode(n);
    let codeInt = converBinaryToInt(codeBinary);
    return codeInt;
};

//gen gray code in binary
const genGrayCode = (n) => {
    if (n <= 0) {
        return ['0'];
    } else if (n == 1) {
        return ['0', '1'];
    } else {
        let code = genGrayCode(n - 1);
        let tempCode = [];

        // add 0 
        for (let i = 0; i < code.length; i++) {
            tempCode.push(`0${code[i]}`)
        }

        // add 1 
        for (let i = code.length - 1; i >= 0; i--) {
            tempCode.push(`1${code[i]}`);
        }
        return tempCode;
    }
}
// convert binary to decimal
const converBinaryToInt = (bin) => {
    const codeInt = bin.map((value) => {
        return parseInt(value, 2)
    })
    return codeInt
}
