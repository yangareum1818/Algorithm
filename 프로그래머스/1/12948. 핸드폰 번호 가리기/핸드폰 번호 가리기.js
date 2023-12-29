function solution(phone_number) {
    var answer = '';
    // let phone = phone_number.substr(-4, 4).replace(/[1-9]/g, '*');
    let phone = phone_number.length;
    let star = "*".repeat(phone - 4) + phone_number.slice(-4);
    console.log(phone_number.slice(-4))
    return answer = star;
}