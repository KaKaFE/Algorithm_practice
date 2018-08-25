// 문자열의 길이를 구하는 순환함수, 문자열의 길이는 맨앞의 한글자를뺀 나머지문자열의길이 + 1 이다
// substring(1) 함수는 문자열의 맨앞의 문자를 뺀다 리턴값은 나머지문자값
function strlength(str) {
    if (str === "") {
        return 0;
    } else {
        return 1 + (strlength(str.substring(1)));
    }
};
strlength('123');
// 문자열을 뒤집어 프린트
function printReverse(str) {
    if (str.length === 0) {
        return;
    } else {
        printReverse(str.substring(1))
        console.log(str.charAt());
    }
};
printReverse('123');
// 배열의 합 구하기
function sum(n, array) {
    if (n <= 0) {
        return 0;
    } else {
        return sum(n-1, array) + array[n - 1];
    }
}
sum(5,[1,2,3,4,5]);
// 모든 반복문은 recursion으로 표현 가능하다 반대의경우도 가능
// 순환함수는 복잡한 알고리즘을 단순하고 알기쉽게 표현하는것을 가능하게한다
