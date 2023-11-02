function solution(id_pw, db) {
    let answer = '';
    const [id, pw] = id_pw;
    
    // break; 해줘야 반복문이 안돈다. (값이 반복문 돌면서 바뀌니까 break;를 써줘야 함)
    // 두번째 풀이.
    for(let i = 0; i < db.length; i++) {
        const IDs = db[i][0];
        const PWs = db[i][1];
        
        if (IDs === id) {
            if (PWs === pw) {
                answer = 'login';
                break;
            } else {
                answer = 'wrong pw';
                break;
            }
        } else {
            answer = 'fail';
        }
        
        // // ID PW 모두 동일한 값이 있을 경우.
        // if (PWs === true ) {
        //     if (IDs === true) {
        //         return answer = 'login'l
        //     }
        // }
        // // ID는 일치하지만, PW가 틀릴 경우.
        // if (PWs === false) {
        //     if (IDs === true) {
        //         return answer = 'wrong pw';
        //     }
        // }
        // // ID PW 모두 일치하지 않을 경우.
        // if (PWs && IDs === false ) {
        //     return answer = 'fail';
        // }
    }
    return answer;
}