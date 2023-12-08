function solution(my_string, m, c) {
    var answer = [];
    // for(let i = 0; i < my_string.length; i+=m) {
    //     answer += my_string[i]
    // }
    // for(let i = 0; i < my_string.length; i++) {
    //     console.log('i', my_string[i], i)
    //     for(let j = 0; j < my_string.length; j++) {
    //        console.log('j', my_string[j], j)
    //     }
    //     answer = my_string.slice(0, m)
    // }
    for(let i = c-1; i < my_string.length; i+=m) {
        console.log(i, my_string[i])
        answer += my_string[i]
    }
    return answer;
}