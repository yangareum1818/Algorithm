function solution(people, limit) {
    var answer = 0;
    let peopleSort = people.sort((a, b) => a - b);
    
    while (peopleSort.length !== 0) {
        // console.log('first', peopleSort, peopleSort[0] + peopleSort[1])
        if (peopleSort[0] + peopleSort[peopleSort.length - 1] <= limit) {
            peopleSort.shift();
            peopleSort.pop();
            answer++;
            // console.log('1', peopleSort)
        } else {
            peopleSort.pop();
            answer++;
            // console.log('2', peopleSort)
        }
        // console.log('end', peopleSort)
    }
    
    return answer;
}

// 반복 : people의 길이가 0이 될 때 까지 반복. while사용 (people.length !== 0)

// 1. 배열을 오름차순으로 정렬해준다. ex) [50, 50, 70, 80]
// 2. 배열 첫번째, 마지막번째 요소를 더 했을 때, limit(100)보다 작거나 같을 경우. 50 + 50 (100) <= 100
//    2-1. 배열의 첫번째, 마지막번째 요소를 제거해준다. shift(), pop()
//    2-2. 배열의 answer에 1을 추가 해준다.
// 3. 그렇지 않으면, limit보다 클 경우.
//    3-1. 배열의 마지막 요소를 삭제해준다. pop()
//    3-2. 배열의 answer에 1을 추가한다.

// 알게된 점 : 정렬의 중요성.
// 오름차순 sort((a, b) => a - b), 내림차순 sort((a, b) => b - a)