function solution(arr, n) {
    var answer = [];
    const len = arr.length;
    console.log(len)
    if (len % 2 === 1) {
        for(let i = 0; i < arr.length; i++) {
            console.log(i, arr[i])
            if (i % 2 === 0) {
                arr[i] += n;
                answer.push(arr[i])
            } else {
                answer.push(arr[i])
            }
        }
    } else {
        for(let i = 0; i < arr.length; i++) {
            if(i % 2 === 1) {
                arr[i] += n;
                answer.push(arr[i])
            } else {
                answer.push(arr[i])
            }
        }
    }
    return answer;
}