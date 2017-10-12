let Arr = [1, 4, 10, 2, 6, 20]

function merge(Arr, startCell, middleCell, lastCell) {
	let leftArr = [];
	let rightArr = [];

	for (let i = 0; i < middleCell; i++) {
		leftArr.push(Arr[i])
	}
	for (let j = middleCell; j <= lastCell; j++) {
		rightArr.push(Arr[j])
	}

	let leftIDX = 0;
	let rightIDX = 0;
	let res = [];
	for (let loopIDX = 0; loopIDX < lastCell; loopIDX++) {
		if (leftArr[leftIDX] <= rightArr[rightIDX]) {
			res.push(leftArr[leftIDX])
			leftIDX++
		}
		else {
			res.push(rightArr[rightIDX])
			rightIDX++
		}
	}

	return res;
}

function MergeSort(Arr, startCell, endCell) {
	const newArr = Arr;

	console.log("startCell", startCell)
	console.log("endCell", endCell)

	if (startCell < endCell && endCell > 1) {
		let middleCell = (endCell - startCell + 1) / 2

		MergeSort(newArr, startCell, middleCell)
		MergeSort(newArr, middleCell + 1, endCell)

		merge(newArr, startCell, middleCell, newArr.length)
	}
}

let Arr2 = [5,78,9,3,21,2]

MergeSort(Arr2, 0, 5)