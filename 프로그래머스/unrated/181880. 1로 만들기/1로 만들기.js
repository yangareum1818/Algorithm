function solution(num_list) {
    var answer = 0;
    for(let i = 0; i < num_list.length; i++) {
        let one = function divide (n) {
            while (true) {  // 1이 참이고, 0이 거짓이기 때문에
                if (n === 1) {
                    break;
                }
                if (n % 2 === 0) {
                    n = n / 2;
                    answer += 1;
                    console.log('a', answer)
                } else {
                    n = (n - 1) / 2;
                    answer += 1;
                    console.log(answer)
                }
            }
        }
        one(num_list[i])
    }
    return answer;
}