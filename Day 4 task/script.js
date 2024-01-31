//Do the below programs in anonymous , IIFE & arrow function

//a.Print odd numbers in an array
//anonymous functionn :

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

(function(arr) {
    arr.forEach(function(number) {
        if (number % 2 !== 0) {
            console.log(number);
        }
    }); 
})(numbers);

//IIFE Function:

(function(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//arrow function:

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var oddNumbers = numbers.filter(number => number % 2 !== 0);
console.log(oddNumbers); 

//b.Convert all the strings to title caps in a string array

//anonymous function:

var fruits = ["apple", "banana", "orange", "grape"];

var fruits1 = (function(arr) {
    return arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    });
})(fruits);
console.log(fruits1);

//IIFE Function:

var fruits = ["apple", "banana", "cherry", "date"];
var fruits1 = (function(arr) {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
})(fruits);
console.log(fruits1);

//arrow function:
var fruits = ["apple", "banana", "cherry", "date"];
var fruits1 = fruits.map(str => str.charAt(0).toUpperCase() + str.slice(1));
console.log(fruits1);

//c .Sum of all numbers in an array

//anonymous function:

var numbers = [1, 2, 3, 4, 5];
var sum = function(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
};
console.log(sum(numbers)); 

//IIFE Function:

var numbers = [1, 2, 3, 4, 5];
var sum = (function(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
})(numbers);
console.log(sum);

//arrow function:

var numbers = [1, 2, 3, 4, 5];
var sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

//d .Return all the prime numbers in an array

//anonymous function:

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var isPrime = function(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};
var primeNumbers = numbers.filter(function(num) {
    return isPrime(num);
});
console.log(primeNumbers);

//IIFE Function:

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var primeNumbers = (() => {
    var isPrime = num => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };
  return numbers.filter(num => isPrime(num));
})();
console.log(primeNumbers); 

//Arrow function:

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};
var primeNumbers = numbers.filter(isPrime);
console.log(primeNumbers);

//e .Return all the palindromes in an array

//anonymous function:

var words = ["level", "hello", "radar", "world", "civic"];
var isPalindrome = function(word) {
  var cleanWord = word.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return cleanWord === cleanWord.split("").reverse().join("");
};
var palindromeWords = words.filter(isPalindrome);
console.log(palindromeWords);

//IIFE Function:

var words = ["level", "hello", "radar", "world", "civic"];
var palindromes = (function(arr) {
    return arr.filter(function(word) {
        var cleanWord = word.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        return cleanWord === cleanWord.split("").reverse().join("");
    });
})(words);
console.log(palindromes);

//Arrow function:

var words = ["level", "hello", "radar", "world", "civic"];
var isPalindrome = word => {
  var cleanWord = word.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return cleanWord === cleanWord.split("").reverse().join("");
};
var palindromes = words.filter(isPalindrome);
console.log(palindromes);

//f .Return median of two sorted arrays of the same size.

//anonymous function:

var findMedian = function(arr1, arr2) {
    const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
    const length = mergedArray.length;
    
    if (length % 2 === 0) {
      const midIndex1 = length / 2 - 1;
      const midIndex2 = length / 2;
      return (mergedArray[midIndex1] + mergedArray[midIndex2]) / 2;
    } else {
      const midIndex = Math.floor(length / 2);
      return mergedArray[midIndex];
    }
  };
  var array1 = [1, 3, 5];
  var array2 = [2, 4, 6];
  var median = findMedian(array1, array2);
  console.log(median);

  //IIFE function:
  
  var findMedian = function(arr1, arr2) {
  var mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
  var length = mergedArray.length;
  
  if (length % 2 === 0) {
    var midIndex1 = length / 2 - 1;
    var midIndex2 = length / 2;
    return (mergedArray[midIndex1] + mergedArray[midIndex2]) / 2;
  } else {
    var midIndex = Math.floor(length / 2);
    return mergedArray[midIndex];
  }
};
var arr1 = [1, 3, 5];
var arr2 = [2, 4, 6];
var median = findMedian(arr1, arr2);
console.log(median);

//g.Remove duplicates from an array

//anonymous function:
var array = [1, 2, 2, 3, 4, 4, 5];
var Array1 = (function(arr) {
    return arr.filter(function(value, index, self) {
        return self.indexOf(value) === index;
    });
})(array);
console.log(Array1);

//IIFE Function:

var uniqueArray = (function() {
    return function(arr) {
      return arr.filter((value, index, self) => self.indexOf(value) === index);
    };
  })();
  var arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
  var arrayWithoutDuplicates = uniqueArray(arrayWithDuplicates);
  console.log(arrayWithoutDuplicates);

  //h.Rotate an array by k times

  //anonymous function:

  var rotateArray = function(arr, k) {
    for (let i = 0; i < k; i++) {
      arr.unshift(arr.pop());
    }
    return arr;
  };
  var originalArray = [1, 2, 3, 4, 5];
  var k = 2;
  var rotatedArray = rotateArray([...originalArray], k);
  console.log(rotateArray);

  //IIFE Function:

  var rotateArray = (function() {
    return function(arr, k) {
      var len = arr.length;
      k = k % len; // Handle cases where k is larger than the array length
       var rotatedArray = [...arr.slice(k), ...arr.slice(0, k)];
      return rotatedArray;
    };
  })();
  
  var originalArray = [1, 2, 3, 4, 5];
  var k = 2;
  var rotatedArray = rotateArray(originalArray, k);
  console.log(rotatedArray);

 
