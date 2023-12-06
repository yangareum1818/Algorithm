function solution(left, right) {
    var answer = 0;

    for(let i = left; i <= right; i++) {
        var num=0
        for(let j = 1; j <= i; j++) {
            i % j === 0 ? num += 1 : 0;
        }
        num % 2 === 0 ? answer += i : answer -= i;
    }
    return answer;
}

// 1. 이중 반복문으로 left부터 right까지의 약수의 갯수를 구한다. 변수 num.
// 2. 이중 반복문안에서 나온 num값을 짝, 홀수를 구분해 조건을 건다. i의 값을 +할지, -할지.