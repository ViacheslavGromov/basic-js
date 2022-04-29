const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {

  if(!(arr instanceof Array)) throw new Error ("'arr' parameter must be an instance of the Array!");
  
  const copyArr = [...arr];
  const toDelete = 'toDelete';
  for(let i = 0; i <= copyArr.length; i++) {
     switch (copyArr[i]) {
        case "--discard-next":
          copyArr[i] = toDelete;
           if (i !== copyArr.length - 1) copyArr[i + 1] = toDelete;
           break;
        case "--discard-prev":
          copyArr[i] = toDelete;
           if (i !== 0) copyArr[i - 1] = toDelete;
           break;
        case "--double-next":
          copyArr[i] = toDelete;
           if (i !== copyArr.length - 1) copyArr.splice(i + 1, 0, copyArr[i + 1]);
           break;
        case "--double-prev":
           copyArr[i] = toDelete;
           if (i !== 0 && copyArr[i - 1] !== toDelete) copyArr.splice(i, 0, copyArr[i - 1]);
           break;
     }      
  }

  return copyArr.filter(item => item !== toDelete);  
 }


module.exports = {
  transform
};
