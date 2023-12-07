function solution(num_str) {
    var answer = 0;
    var n = num_str.split('');
    
    for(let i = 0; i <  n.length; i++) {
        answer += parseInt(n[i])
    }
    return answer;
}