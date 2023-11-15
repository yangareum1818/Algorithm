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