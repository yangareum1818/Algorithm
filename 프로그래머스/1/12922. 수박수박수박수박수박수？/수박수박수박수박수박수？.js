function solution(n) {
    var answer = '';
    for (let i = 1; i <= n; i++) {
        i%2==1?answer+="수":answer+="박" 
    }
    return answer;
}
// n이 3이면 "수박수"를 return
// n이 