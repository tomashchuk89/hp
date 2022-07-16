
//Task 1
function getMax(arr, index = 0, max = arr[index]) { 
  if (index < arr.length - 1) { 
     index++; 
     if (max < arr[index]) max = arr[index]; 
     return getMax(arr, index, max); 
    } 
    return max; 
} 

function factorial(getMax) {
  if (getMax == 1) {
    return getMax;
  } else {
    return getMax * factorial(getMax - 1);
  }
}
console.log("=========Task 1===========")
console.log("Max  = ", getMax([8]));
console.log("Factorial  = ", factorial(getMax([8])));
console.log("Max  = ", getMax([1, 8, 37, 5, 17]));
console.log("Factorial  = ", factorial(getMax([1, 8, 37, 5, 17])));
console.log("Max  = ", getMax([8, 17]));
console.log("Factorial  = ", factorial(getMax([8, 17])));

//Task 2
function power(x, n) {
    if (n == 1) {
      return x;
    } else {
      return x * power(x, n - 1);
    }
  }
  console.log("=========Task 2===========")
  console.log("Result  = ", power(5, 2)); 

//Task 3
function myFanc(x) {
  let result = 0;
  return function (x) {
    return  result += x;
  };
  };
let sum = myFanc(3);
console.log("=========Task 3===========")
console.log('One', sum(3));
console.log('Two', sum(5));
console.log('Three', sum(20));

//Task 4
function doFunction(y, x, quotient) { 
  return quotient(y, x); 
} 

function quotient(y, x) { 
  return parseInt(y /x); 
}
console.log("=========Task 4===========")
console.log(doFunction(5, 2, quotient));
console.log(doFunction(7, 2, quotient));



