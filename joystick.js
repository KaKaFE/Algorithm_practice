function solution(name) {
    var map = 'nopqrstuvwxyzabcdefghijklm'.toUpperCase();
    var NS = name.split('');
    var answer = 0;

    var lastA = 0;
    var firstA = 0;
    //좌우 탐색    
    for (var i = 1; i < NS.length; i++) {
        if (NS[i] !=='A') {
            break;
        } else {
            firstA++;
        }
    }
    for (var i = NS.length -1; i > -1; i--) {
        if (NS[i] !=='A') {
            break;
        } else {
            lastA++;
        }
    }

    if (lastA > 0 || firstA >0) {
        if (lastA > firstA) {
            NS = NS.slice(0,NS.length - lastA);
        } else {
            NS.splice(1,firstA);
        }
    }

    NS.map(a=>{
        console.log(map.indexOf(a))
        answer += Math.abs(map.indexOf(a) - 13);
    })

    return answer + NS.length - 1;
}

// 미해결 나중에 다시...