/*

	This algorithm is set to find out how many times an array has been rotated. 
	The number of rotations in this array will be the number of elements before
	the minimum element in the rotation.

	There are two ways to do this.

	1. A linear search through the array to search for the minimum element. This will
	run with a complexity of O(n). 

	2. The other way is by using a modified version of a binary tree search. This will 
	reduce our run time complexity. 

	This algorithm will only work if there are no duplicates in an array.  

*/ 

function linearSearch(arr){
	var min = arr[0];
	var minIdx = 0;
	for(var i = 1; i < arr.length; ++i){
		if(arr[i] < min){
			min = arr[i];
			minIdx = i;
		}
	}
	return minIdx;
};

function modifiedBtree(arr){

	var low = 0;
	var mid = (arr.length) / 2;
	var high = arr.length - 1;

	while(low <= high){
		var next = (mid + 1) % arr.length;
		var previous = (mid + (arr.length) - 1) % arr.length;

		if(arr[low] <= arr[high]){
			return low
		}else if(arr[mid] <= arr[next] && arr[mid] <= arr[previous]){
			return mid
		}else if(arr[mid] <= arr[high]){
			high = mid - 1;
		}else if(arr[mid] <= arr[low]){
			low = mid + 1;
		}
	}
	return -1;
};

var count = linearSearch([11,12,15,18,2,5,6,8]);
var countBtree = modifiedBtree([11,12,15,18,2,5,6,8]);
console.log("the array is rotated " , count, " times");
console.log("the array is rotated " , countBtree, " times");