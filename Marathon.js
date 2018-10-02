// 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
// completion의 길이는 participant의 길이보다 1 작습니다.
// 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
// 참가자 중에는 동명이인이 있을 수 있습니다.
// 예제 #1
// leo는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.
// 예제 #2
// vinko는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.
// 예제 #3
// mislav는 참여자 명단에는 두 명이 있지만, 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.

let participant = ['marina', 'josipa', 'nikola', 'vinko', 'filipa']
let completion = ['josipa', 'filipa', 'marina', 'nikola']

let result = function (participant) {
    let result = [];
    let count = 0;
    participant.forEach(v => {
        let m1 = new Human(v, count + 1)
        if (result.length === 0) {
            result.push(m1);
        } else {
            for (var i = 0; i < result.length; i++) {
                if (m1.name === result[i].name && result.length >= 1) {
                    result[i].count += 1
                    return;
                } else {
                    result.push(m1);
                    return;
                }
            }
        }

    });
    return result;
}
let comparison = function (function1, completion) {
    completion.forEach(v => {
        for (var i = 0; i < function1.length; i++) {
            if (v === function1[i].name) {
                function1[i].count -= 1
            }
        }
    });
    return function1;
}
function solution(participant, completion) {
    var answer = '';
    let show1 = comparison(result(participant), completion)
    show1.forEach(function (v) {
        if (v.count === 1) {
            answer = v.name
        }
    });
    return answer;
}
// console.log(solution(participant, completion))


// 다른 사람의풀이 
function solution(participant, completion) {
    const hash = {};

    for (let val of participant) {
        if (!hash[val]) hash[val] = 0;
        hash[val]++;
    }

    const result = completion.forEach(val => hash[val]--);

    for (let key in hash) if (hash[key]) return key;
}
function solution(participant, completion) {

    var sortedComp = completion.sort(),
        sortedPart = participant.sort();
    var name = sortedPart[sortedPart.length - 1];
  for(var idx in sortedComp){
      if(sortedComp[idx] !== sortedPart[idx]){ name = sortedPart[idx];
                break;                             }
  }
return name;
}
solution(participant,completion);
// 미완성 통과못함..