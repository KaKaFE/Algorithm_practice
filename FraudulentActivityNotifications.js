
//[1, 2, 3, 4, 5, 6] 3
// Complete the activityNotifications function below.
function activityNotifications(expenditure, d) {
	let intervalCount = expenditure.length - d;
	let cutArr = []
	let alertNum = 0;
	for (let i = 0, k = d; i < intervalCount; i++, k++){
		cutArr = arrCutter(expenditure, i, k);
		// sort 때문에 시간초과. 다른부분은 정상작동 다른 정렬알고리즘을 공부해서 적용해봐야할듯
		if (median(cutArr.sort((a, b) => a - b)) * 2 <= expenditure[k]) alertNum++;
	}
	return alertNum;
}
function arrCutter(expenditure, d, leng) {
	let cuttedArr = [];
	for (let i = d; i <= leng -1 ; i++) {
		cuttedArr.push(expenditure[i]);
	}
	return cuttedArr;
}
function median(cuttedArr) {
	if (cuttedArr.length % 2 === 0 ) {
		return ( cuttedArr[cuttedArr.length / 2] + cuttedArr[(cuttedArr.length / 2 )- 1] ) / 2 ;
	}
	let leng = cuttedArr.length - 1
	let median = leng / 2
	return cuttedArr[median];
}
activityNotifications([2, 3, 4 ,2 ,3 ,6 ,8, 4, 5], 5);
