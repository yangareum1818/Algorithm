function solution(my_string, letter) {
    var answer = '';
    my_string = my_string.split('');
    for (let i = 0; i < my_string.length; i++) {
        if (my_string[i] === letter) {
            my_string.splice(i, 1);
            i--;
        }
    }
    return answer = my_string.join('');
}

// 다른 사람들의 풀이. 습관성반복문 금지하고 메소드함수를 적극활용하자..
// return my_string.split(letter).join('');
// return my_string.replaceAll(letter, "");