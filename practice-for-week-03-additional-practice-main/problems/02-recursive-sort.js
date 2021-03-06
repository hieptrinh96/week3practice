/*
    Recursive Sort

    Given an array of numbers, write a function that returns a new array of numbers sorted from lowest to highest.

    */
   
   function sort(nums, newArr = []) {
       // base case
       if (!nums.length) return newArr;
       // finds our lowest element
       let smallest = Math.min(...nums);
       let index = nums.indexOf(smallest)
       // recursive step -> removes an element each time it recurses
       nums.splice(index, 1);
       newArr.push(smallest)
       // recursuive case 
       return sort(nums, newArr);
    }
    console.log(sort([])) // prints []
    console.log(sort([9])) // prints [9]
    console.log(sort([5, 4, 3, 2, 1])) // prints [1, 2, 3, 4, 5]
    console.log(sort([14, 5, 10, 6, 3, 4, 21, 16, 9])); // prints [ 3, 4, 5, 6, 9, 10, 14, 16, 21 ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = sort;
} catch (e) {
    module.exports = null;
}