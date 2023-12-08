function solution(n) {
    var answer = 0;
    if (n%2===0) {
        for(let i = 0; i <= n; i++) {
            console.log(n, i)
            if (i%2===0) {
                answer += i**2;
            }
        }
    } else {
        for(let i = 0; i <= n; i++) {
            console.log(n, i)
             if (i%2===1) {
                 answer += i;
             }
        }
    }
    return answer;
}

// n이 기준..
// n이 홀수라면 n이하의 홀수를 모두 더해 return. (1+3+5+7)
// n이 짝수라면 n이하의 짝수를 모두 제곱한 합 (2, 4, 6, 8, 10)