function solution(price, money, count) {
    let why = 0;
    for(let i = 1; i <= count; i++) {
        why += price * i
    }
    if(why <= money) {
        return why = 0
    } else {
        return why -= money
    }
}
// 1. why - money가 부족하면, 부족한 만큼 return
// 2. 금액이 부족하지 않는다면 0을 return