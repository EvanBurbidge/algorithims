var chai = require('chai');
var mocha = require("mocha");
var assert = chai.assert;
var expect = require("chai").expect;

/*
*
* A circle sorted array is an array that has been rotate a number of times.
*
* In this case we want to find X in the array.
*
* However we do not want to do this with O(n) linear complexity.
*
* We should always check something like this out with Binary Search for time complexity O(log n).
*
* If we have duplicates in an array the findElementBinary will not work. All elements in the array must be
* distinct.
*
* example array = [12, 14, 18, 21 , 3, 6, 8 ,9]
*
* case 1: arr[mid] === x
* case 2: arr[mid] <= arr[high] if true, the segment is sorted.
*   2A: if x is greater than a[mid] and less than or equal to arr[high] then low = mid + 1
*   2B: else high = mid - 1.
* case 3: arr[low] <= arr[mid]
*   3A: x >= arr[low] x <= a[mid]
*       high = mid - 1;
*   3B: low = mid + 1
*
* */



function findElementBinary(arr, x){

    var low = 0;
    var high = arr.length - 1;

    while(arr[low] > arr[high]){

        var mid = Math.floor((low + high ) / 2);

        if(arr[mid] > arr[high]){
            low = mid + 1
        }else{
            high = mid;
        }
    }
    return low;
}

//console.log(findElementBinary(, 2));
var a1 = [12, 14, 18, 21, 2, 5, 6, 7];

describe("it should test the findElementBinary functionality", function(){

    it('should provide and first test', function(){
       expect(findElementBinary(a1, 2)).to.equal(4);
    });

});