const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  
  let nToArrNum = String(n).split('').map(Number)
  let res = nToArrNum.map((_,i)=>{
    let copyArr = [...nToArrNum]; // copy arr for results after delete one symbol
    copyArr.splice(i,1);// delete one symbol
    return Number( copyArr.join(''))}) //return res
  return Math.max(...res) //find max value

}

module.exports = {
  deleteDigit
};
