function solution(numbers) {
    var answer = 0;
    for(let i = 0; i < 10; i++) {
        var a = numbers.includes(i);
        if (!a) {
            answer += i;
        }
    }
    return answer;
}