function solution(my_string, s, e) {
    var r = my_string.slice(s, e + 1).split('').reverse().join('');
    return my_string.replace(my_string.slice(s, e+1), r);
}

//     var answer = '';
//     var r = my_string.split('').slice(s, e + 1).reverse().join(',');
//     var my = my_string.split('').splice(s, e - (s - 1), r)
//     // .splice(s - 1, r.length, r);
    
//     console.log('r', r, 'my', my, my_string)
//     return answer = my;