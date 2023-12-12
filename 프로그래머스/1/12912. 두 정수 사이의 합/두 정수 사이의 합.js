function solution(a, b) {
    var answer = 0;
    function add(m, n) {
        for(let i = m; i <= n; i++) {
            answer += i;
        }
    }
    
    if (a <= b) {
        add(a, b)
    } else {
        add(b, a)
    }
    
    return answer;
}