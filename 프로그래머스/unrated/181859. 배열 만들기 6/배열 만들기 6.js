function solution(arr) {
    var answer = [];
    
    for(let i = 0; i < arr.length; i++) {
        if (answer.length === 0) {
            answer.push(arr[i]);
        } else if (answer.length > 0 && answer.at(-1) === arr[i]) {
            answer.pop();
        } else if (answer.length > 0 && answer.at(-1) !== arr[i]) {
            answer.push(arr[i]);
        }
    }
    if(answer.length === 0) answer.push(-1)
    
    
    return answer;
}

// i의 초깃값은 0, i가 arr의 길이보다 작으면 다음을 반복. (반복문 사용)
// 마지막 원소 찾는 법은 at()를 사용하였다.

// 조건1. answer이 빈배열이라면, arr[i]값을 answer에 추가하고, i에 1을 더한다.
// 조건2. answer에 원소가 있고 &&, answer의 마지막 원소가 arr[i]와 값이 같.으.면! answer에 마지막 원소를 제거하고 i에 1을 더한다.
// 조건3. answer에 원소가 있고 &&, answer의 마지막 원소가 arr[i]와 값이 다.르.면! answer의 뒤에서 arr[i]를 추가하고, i에 1을 더한다.
// 조건4. 빈 배열을 return 해야하는 경우는 [-1]를 return한다.