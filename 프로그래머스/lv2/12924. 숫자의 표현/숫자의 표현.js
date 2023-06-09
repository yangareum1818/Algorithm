function solution(n) {
    var answer = 0;
    for(let i = 1; i <= n; i++) {
        if(n%i === 0 && i % 2 === 1) {
            answer++;
        }
    }
    return answer;
}

// 1. 반복문을 돌려 i를 1로 n인 15의 값과 같을때 까지 돌린다.
// 2. 조건문으로 15를 반복문이 도는 i (1, 2, 3, 4 .. 15)를  나눴을 때 나머지가 0인 경우, i (1, 2, 3 ..15)를 2로 나눠었을 때 나머지가 1이 되는 수의 경우만 걸러낸다.
// 3. 그 값을 장바구니 역할을 하는 변수 answer에 넣어준다.

// 주어진 자연수를 연속되는 자연수들의 합으로 표현할 수 있는 방법의 수는 주어진 자연수의 약수 중에서 홀수인 수의 개수와 같다.
// (요약) : 주어진 수 n 까지 반복문을 돌며 n의 약수 이면서 홀수일 때 방법의 수를 증가시키는 방법으로 방법의 수를 구하고, 구해진 방법의 수를 반환하는 방법