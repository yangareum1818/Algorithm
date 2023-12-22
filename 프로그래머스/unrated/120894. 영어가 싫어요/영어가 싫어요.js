function solution(numbers) {
    var answer = 0;
    var result = '';
    var abc = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    numbers = numbers.split('')
    
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