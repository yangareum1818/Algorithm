function solution(dot) {
    var answer = 0;
    if (dot[0] > 0 && dot[1] > 0) {
        return answer = 1;
    }
    if (dot[0] < 0 && dot[1] > 0) {
        return answer = 2;
    }
    if (dot[0] < 0 && dot[1] < 0) {
        return answer = 3;
    }
    if (dot[0] > 0 && dot[1] < 0) {
        return answer = 4;
    }
    return answer;
}


// 다른 사람의 풀이 (구조분해와 삼항연산자의...방법이...)
// function solution(dot) {
//     const [num,num2] = dot;
//     const check = num * num2 > 0;
//     return num > 0 ? (check ? 1 : 4) : (check ? 3 : 2);
// }