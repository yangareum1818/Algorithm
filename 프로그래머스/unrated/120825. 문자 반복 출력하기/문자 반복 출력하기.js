function solution(my_string, n) {
    var answer = '';
    for(let i = 0; i < my_string.length; i++) {
        console.log(my_string[i])
        for (let j = 0; j < n; j++) {
            answer += my_string[i];   
        }
    }
    return answer;
}