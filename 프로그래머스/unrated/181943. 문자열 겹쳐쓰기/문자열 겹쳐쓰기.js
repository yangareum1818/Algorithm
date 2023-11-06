function solution(my_string, overwrite_string, s) {
    var answer = '';
    my_string = my_string.split('')
    my_string.splice(s, overwrite_string.length, overwrite_string);
    return answer = my_string.join('');
}