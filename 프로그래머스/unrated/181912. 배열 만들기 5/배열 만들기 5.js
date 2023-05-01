function solution(intStrs, k, s, l) {
    var answer = [];
    for(let i = 0; i < intStrs.length; i++) {
        const int = intStrs[i].slice(s, s + l);
        if(int > k) {
            answer.push(Number(int));
        }
    }
    return answer;
}