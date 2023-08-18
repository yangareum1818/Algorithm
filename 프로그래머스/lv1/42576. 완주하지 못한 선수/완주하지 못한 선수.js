function solution(participant, completion) {
    var answer = '';
    participant.sort();
    completion.sort();
    for(let i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i]) {
            return answer = participant[i]
        }
    }
    return answer;
}

// : 이중 for문을 돌릴 경우, 시간초과가 걸린다. (시간 복잡도)
// 1. 두 배열을 정렬한다.
// 2. index 0번부터 순서대로 비교하고 두 원소가 다를 경우, participant원소를 return한다.