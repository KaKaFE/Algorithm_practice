//  factorial(n) 은 음이 아닌 정수 n에 대해서 n!을 계산.
//  n = 4 일때 리턴값은 4 * factorial(3) = 24
//  factorial(3)의 리턴값은 3* f actorial(2) = 6
//  factorial(2)의 리턴값은 2 * factorial(1) = 2
//  factorial(1)의 리턴값은 1 * factorial(0) = 1
//  factorial(0)의 리턴값은 1
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1)
    }
}

// x의 n승의 값 구하기
// 2의 2승 doublePower(2,2) 실행시 , 리턴값 2 * doublePower(2,1) = 2 , 2의2승은  4
// doublePower(2,1) 리턴값 2 *doublePower(2,0)) = 1
// doublePower(2,0) 리턴값 1
function double(x, n) {
    if (n === 0) {
        return 1;
    } else {
        return x * double(x, n - 1);
    }
}

// Fibonacci 수열
function fibonacci(n) {
    if (n < 2) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// 최대공약수 Euclid method
function euclid(p, q) {
    if (q === 0) {
        return p;
    } else {
        return euclid(q, p % q);
    }
}
euclid(100,50);