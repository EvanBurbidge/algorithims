function howMany(arr){

	var mid = (arr.length) / 2;
	var low = 0;
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

var count = howMany([11,12,15,18,2,5,6,8]);
console.log("the array is rotated " , count, " times");