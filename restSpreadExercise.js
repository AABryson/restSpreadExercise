// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

//Refactor it to use the rest operator & an arrow function:

//mine*******
  //had extra return; why do they use different variable names?
  const filterOutOdds = (...nums) => return nums.filter(num => num % 2 === 0);

//theirs:
//const filterOutOdds = (...args) => args.filter(v => v % 2 === 0);



//Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.  Make sure to do this using the rest and spread operator.
/*
findMin(1,4,12,-3) // -3
findMin(1,-1) // -1
findMin(3,1) // 1
*/
//first parameter is rest; collects arguments into a single array
//parameter of Math.min used spread operator; each element in array is added as separate argum to new array; why does this need spread?  B/c want to use Math.min on copy? It's b/c need to spread array elements into individual arguments and pass each to Math.min();
const findMin = (...argums) => Math.min(...argums)

/*
mergeObjects
Write a function called ***mergeObjects*** that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.
*/

//mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}
//mine******
//I didn't have last set of paranthesis as theirs does; copying over pieces of two objects to a new object?
const mergeObjects = (obj1, obj2) => {...obj1, ...obj2}

//theirs
//const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

/*
## **doubleAndReturnArgs**

Write a function called ***doubleAndReturnArgs*** which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.
*/
//how do I get into new array and assign to variable;
//first argums accepts any further arguments and collects them into an array; spread arr and argums into new array; at first I forgot paranthesis after .map()
const doubleAndReturnArgs = (arr, ...argums) => [...arr, argums.map(val => val * 2)];

/*slice and dice
For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!

Make sure that you are always returning a new array or object and not modifying the existing inputs.

/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {

}

const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
  }

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {

}
//a.b. are the brackets in answer necessary
const extend = (array1, array2) => [...array1, ...array2]

//their answer
// const extend = (array1, array2) => {
//     return [...array1, ...array2];
//   }

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {...obj, [key]:val

}

//their answer:
// / OPTION 1
//   let newObj = { ...obj }
//   newObj[key] = val;
//   return newObj;

  // OPTION 2 (uses an object enhancement you'll see in the next unit)
  // return { ...obj, [key]: val };
//}



/** Return a new object with a key removed. */

function removeKey(obj, key) {

}
//mine****
const removeKey = (obj, key) => let newObject = (...obj); delete newObject[key];

//theirs****
/*
const removeKey = (obj, key) => {

  // OPTION 1
  let newObj = { ...obj }
  delete newObj[key]
  return newObj;

  // OPTION 2 (uses an object enhancement you'll see in the next unit)
  // ({ [key]: undefined, ...obj } = obj);
  // return obj;
}
*/

/** Combine two objects and return a new object. */

function combine(obj1, obj2) {

}

const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
  }

/** Return a new object with a modified key and value. */

function update(obj, key, val) {

}

const update = (obj, key, val) => {
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
}
