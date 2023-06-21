function solution(num, k) {
    var answer = 0;
    
    num = String(num).split('');
    let idx = num.indexOf(String(k));
    
    idx === -1 ? answer = idx : answer = idx + 1;
    // if(idx === -1) {
    //     answer = idx;
    // } else {
    //     answer = idx + 1;
    // }
    return answer;
}

// 1. 숫자인 num을 String으로 바꿔주고, split함수를 이용해 배열에 구분을 지어준다.
// 그럼 num은 ['2', '9', '1', '8', '3']이 된다.
// 2. 이 배열을 idx변수로 담아 indexOf를 이용해 k와 동일한 문자가 있는지 확인한다. (이때, k도 문자열로 바꿔준다.)
// 3. 조건문을 이용해 idx의 값이 -1이면 answer에 idx를 대입한다. (배열안에 일치하는 문자열이 없는 경우, -1를 return 한다.)
// 4. 아니라면, idx에 1을 더하고 answer에 idx를 대입한다.
// ( 1을 더하는 이유는 인덱스가 0부터 시작하기때문에, 1을 더해준다.)