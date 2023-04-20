const flattenArray = (arr) => {
	let flatArr = [];
	for (var i = 0; i < arr.length; i++){
		if (Array.isArray(arr[i])){
			for (var x = 0; x < arr[i].length; x++){
				flatArr.push(arr[i][x]);
			};
		} else {
			flatArr.push(arr[i]);
		}
	};
	return flatArr; 
}

console.log(flattenArray([1,2,3, [4,5], 6, [7,8], 9]))
