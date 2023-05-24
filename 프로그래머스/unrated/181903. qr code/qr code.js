function solution(q, r, code) {
    var answer = '';
    for(let i = 0; i < code.length; i++) {
        console.log(code[i], i)
        i % q === r ? answer += code[i] : answer;
    }
    return answer;
}