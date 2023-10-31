function solution(num_list) {
    var answer = 0;
    let even = 0;   // 홀수
    let odd = 0;    // 짝수
    
    for (let i = 0; i < num_list.length; i++) {
        i % 2 === 0 ? odd += num_list[i] : even += num_list[i];
        
        answer = Math.max(even, odd);
    }
    return answer;
}