function solution(s) {
    var answer = true;
    console.log(s);
    // if (s.length === 4 || s.length === 6) {  
    //     for (let i = 0; i < s.length; i++) {
    //         let ss = parseInt(s[i]);
    //         console.log(ss, typeof ss)
    //         if (ss == Number) {
    //             answer = false;
    //         } else {
    //             answer = true;
    //         }
    //     }
    // }
    
    if (s.length === 4 || s.length === 6) {
        if ( s == parseInt(s)) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
    
    return answer
}