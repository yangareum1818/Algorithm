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

// 1. left부터 right까지의 약수의 갯수를 구한다.