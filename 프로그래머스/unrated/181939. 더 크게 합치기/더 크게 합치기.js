function solution(a, b) {
    var answer = 0;
    var first = String(a) + String(b);
    var end = String(b) + String(a)
    first = Number(first)
    end = Number(end)
    if (first === end) {
        answer = first
    }
    first > end ? answer = first : answer = end;
    
    console.log(first, end)
    return answer;
}

// 문자열 a + b, b + a를 했을 때, 숫자형으로 변경된 값 중 더 큰 값을 return
// but, a + b, b + a의 값이 같을경우, a+b 값으로 return