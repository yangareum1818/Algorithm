function solution(arr) {
    var answer = [];
    var num = 0;
    
    if (!arr.includes(2)) {
        // answer.push(-1)
        return [-1]
    }
    // const two = arr.slice()
    for(let i = 0 ; i < arr.length; i++) {
        if (arr[i] === 2) {
            num = i;
        }
    }
    return answer = arr.slice(arr.indexOf(2), num + 1);
}
// 배열안에 숫자 2가 들어간 첫번째 i와 마지막으로 들어간 i까지의 숫자를 배열에 return.
// 만약에, 2가 없다면 ? 배열안에 -1을 return.

