function solution(n, k) {
    var answer = [];
    for(let i = k; i <= n; i++) {
        if (i % k === 0) answer.push(i)
    }
    return answer;
}

// 다른사람 문제 풀이.
// for(let i = k ; i <= n; i+=k){
//     answer.push(i)
// }