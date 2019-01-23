function solution(n) {
	var answer = true;
	var result = n % ((n + "").split("").reduce((acc, cur) => {
		return +cur + +acc;
	}))
	if (result) return !answer;
	return answer
}
