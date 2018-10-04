/*
길이가 n이고, 수박수박수박수....와 같은 패턴을 유지하는 문자열을 리턴하는 함수, 
solution을 완성하세요. 예를들어 n이 4이면 수박수박을 리턴하고 3이라면 수박수를 리턴하면 됩니다.
제한 조건
n은 길이 10,000이하인 자연수입니다.
입출력 예
n	return
3	수박수
4	수박수박
*/

function solution(n) {
    let answer = '';
    let wmelon = ['수', '박']
    let count = 0
    if (n === 1) return answer + wmelon[0];
    if (n === 2) return answer + wmelon[0] + wmelon[1];
    else if (n > 2) {
        for (i = 0; i <= n; i++) {
            if (n !== count) {
                answer += wmelon[0]
                count++
            }
            if (n !== count) {
                answer += wmelon[1]
                count++
            }
        }
    }
    return answer;
}

console.log(solution(8));