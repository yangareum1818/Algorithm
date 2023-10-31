function solution(arr) {
    if (arr.length === 1) return [-1];
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    
    return arr;
}

// 1. 배열을 잘라내는 메소드 사용 splice
// 2. 첫번째 인자에서 가장 작은 수를 찾는다. Math.min
// 3. 작은 수의 index 번홀를 찾는다. indexOf
// 4. 두번째 원자로 지울 갯수를 적는다.
// 5. 마지막으로 조건으로 arr의 길이가 1일때, [-1]을 반환한다.
// 왜 ? (처음 배열의 길이가 1이면 1은 결국 잘라내는 것이기 때문이다. 결국 빈 배열).


//     for( let i = 0; i < arr.length; i++) {
//         let abc = Math.min(...arr, arr[i]);
        
//         if (abc !== arr[i]) {
//             answer.push(arr[i]);
//         }
//     }