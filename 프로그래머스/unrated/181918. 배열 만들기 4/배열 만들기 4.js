function solution(arr) {
    var stk = [];
    // for(let i = 0; i < arr.length; i++) {
    //     if (stk.length === 0) {
    //         stk.push(arr[i]);
    //         i += 1;
    //     }
    //     if (stk.length > 0 && arr[i] > stk[i - 1]) {
    //         stk.push(arr[i]);
    //         i += 1;
    //     }
    //     if (stk.length > 0 && arr[i] <= stk[i - 1]) {
    //         stk.pop();
    //     }
    //     console.log(i, arr[i], arr.length, stk[i - 1]);
    // }
    let i = 0;
    while ( i < arr.length ) {
        if ( stk.length === 0) {
            stk.push(arr[i]);
            i++;
        } else if ( stk.length > 0 && arr[i] > stk[stk.length - 1]) {
            stk.push(arr[i]);
            i++;
        } else {
            stk.pop();
        }
    } 
    return stk;
}

// * 변수 i를 만든다. ( 초기값 0으로 설정 후, i가 arr의 길이보다 작으면 다음을 반복 )
// 1. stk가 빈 배열이라면 arr[i]를 stk에 추가 하고 i에 1을 더한다.
// 2. stk에 원소가 있고, stk의 마지막원소가 arr[i]보다 작으면, arr[i]를 skt의 뒤에 추가하고 i에 1을 추가한다.
// 3. stk에 원소가 있는데 stk의 마지막원소가 arr[i]보다 크거나 같으면 stk의 마지막 원소를 stk에서 제거한다.
// 1-3을 마친 후, stk를 return 한다.