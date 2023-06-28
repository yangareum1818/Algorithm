function solution(t, p) {
    var answer = 0;
    let pLen = p.length;
    for(let i = 0; i < t.length; i++) {
        let tt = t.slice(i, i+pLen);
        if (tt.length === p.length) {
            if (tt <= p) {
                answer += 1;
            }
        }
    }
    return answer;
}

// 1. p의 길이를 변수에 담아 구한다. pLen
// 2. t의 길이만큼 반복문을 돌린다.
// 3. 새로운 변수(tt)에 담아 slice 함수를 이용해 index를 시작으로 pLen길이만큼 문자열을 잘라준다.
// 4. 조건문을 이용해 tt의 길이와 p의 길이가 같을 경우, tt가 p보다 작거나 같을 경우 answer변수에 +1을 더해 몇개인지 담아준다.