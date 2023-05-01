function solution(array) {
    var answer = array.join('');
    let sum = 0
    
    for(let i = 0; i < answer.length; i++) {
        if(answer[i] === '7') {
            sum += 1
        }
        console.log(sum)
    }
    return sum
}