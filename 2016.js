/*
문제 설명
2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT

입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 TUE를 반환하세요.

제한 조건
2016년은 윤년입니다.
2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)
입출력 예
a	b	result
5	24	TUE
*/

function solution(a, b) {
    var answer = '';
    var day = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU']
    var month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    var allday = 0;
    if (a === 1) {
        return answer = day[(b - 1) % 7]
    }
    for (var i = 0; i < a - 1; i++) {
        allday += month[i]
    }
    answer = day[(allday + b - 1) % 7];
    return answer;
}

// 각달의 모든날의 수를구한수 모두더하고, 알고싶은날의값도 더해,
// 7로나눈 나머지의값을 day배열에 넣으면 원하는 날이 나옴.
// 구하는공식을 인터넷검색으로 찾았슴