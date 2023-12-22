function solution(numbers) {
    var answer = 0;
    var result = '';
    var abc = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    for(let i = 0; i < numbers.length; i++) {
        result += numbers[i];
        if (abc.includes(result)) {
            answer += String(abc.indexOf(result));
            result = '';
            console.log(answer)
        }
    }
    return Number(answer);
}

// 1. 0-9의 영어를 배열에 담은 변수를 만든다.
// 2. 반복문을 돌려 문자열을 담을 변수를 하나 만들어서 변수에 하나씩 담아준다.
// 3. 조건을 거는데, 0-9까지 만든 배열안에 2번의 변수가 있다면 ?
// 4. 0-9까지 담은 배열에서 2번에 담은 변수가 배열의 몇번째 위치에 있는지를 찾고 answer변수에 담아준다.
// 4-1. 담았을 때, 2번의 값은 초기화가 되어 다시 빈값으로 다음값을 찾는다.
// 4-2. answer변수는 숫자이기때문에 String으로 변환해 answer로 담아준다. ( 그렇지 않으면 담은 숫자들이 더해진다.)
// 4-3. 마지막 return값에 answer은 String 타입이기때문에 Number로 다시 변환해준다.

// 처음 answer의 초깃값을 ''인 문자형으로 해줬다면 String으로 바꿔주지 않아도된다.
