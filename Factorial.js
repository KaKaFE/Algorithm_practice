function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1)
    }
}

//  factorial(n) 은 음이 아닌 정수 n에 대해서 n!을 계산.
//  n = 4 일때 리턴값은 4 * factorial(3) = 24
//  factorial(3)의 리턴값은 3* f actorial(2) = 6
//  factorial(2)의 리턴값은 2 * factorial(1) = 2
//  factorial(1)의 리턴값은 1 * factorial(0) = 1
//  factorial(0)의 리턴값은 1
