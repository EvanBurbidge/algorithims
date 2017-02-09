var chai = require('chai');
var mocha = require("mocha");
var assert = chai.assert;
var expect = require("chai").expect
var arr = [-7,1,5,2,-4,3,0];
/*

An equilibrium index of a sequence is an index into the sequence such that the sum of elements at lower indices 
is equal to the sum of elements at higher indices.

For example, in a sequence   A :

   A_{0}=-7
   A_{1}=1
   A_{2}=5
   A_{3}=2
   A_{4}=-4
   A_{5}=3
   A_{6}=0
3   is an equilibrium index, because:

   A_{0}+A_{1}+A_{2}=A_{4}+A_{5}+A_{6}
6   is also an equilibrium index, because:

   A_{0}+A_{1}+A_{2}+A_{3}+A_{4}+A_{5}=0
(sum of zero elements is zero)

7   is not an equilibrium index, because it is not a valid index of sequence  A

There are two ways of doing this the first method below shows us how to do this with the shortest time complexity possible. This is O(n).

The second way shows a slower but still valid way of producing the results from this array. It is a lot worse as it uses not 1, not 2 but 3 loops.


*/ 



function equilibrium_index(arr){

	var sum = arr.reduce(function(a,b){
		return a+b;
	});

	var leftSum = 0;

	for(var i = 0; i < arr.length; ++i){
		sum-=arr[i];
		
		if(leftSum === sum){
			console.log(i);
			return i;
		}

		leftSum+=arr[i]
	}
	return -1;

}

equilibrium_index(arr);

function bad_equilibrium_idx(arr){

	var i,j;
	var left,right;
	
	for(i = 0; i < arr.length; ++i){
		
		left = 0;
		right = 0;
		//loop through and add up all items up to index I
		for(j = 0; j < i; ++j){
			left+=arr[j];
		}
		// Loop through adding up all elements to length of array
		for(j = 0; j < arr.length; ++j){
			right+=arr[i];
		}
		//if they're equal then return.
		if(left === right){
			return i;
		}
	}
	return -1;

};



// TEST CASES
describe("tests for equilibrium_index testing", function(){

	it('should equal 3 from the good method', function(){
		
		expect(equilibrium_index(arr)).to.equal(3);
		expect(equilibrium_index([-1, 3, -4, 5, 1, -6, 2, 1])).to.equal(1);
		expect(bad_equilibrium_idx([-1, 3, -4, 5, 1, -6, 2, 1])).not.to.equal(1);
		expect(equilibrium_index([1,2,3,1,6])).to.equal(3);

	});

})