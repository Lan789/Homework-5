// 1. Given an array. Write a recursive function that removes the first element and returns the given array. (without using arr.unshift(),assign second element to first, third element to second...)

var arr1 = [];

var result = Infinity;
function m ( arr1 ) {
  if (arr1.length === 0) {
     if (result === Infinity) {
       return arr1;
     }
     
    return result
  } else {
        if (arr1.length) {
         
    return arr1.splice (1,arr1.length)
  }
  }
}
console.log(m(arr1));