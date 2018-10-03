//배열 순차탐색 함수
function search(array ,arraylength,target){
    for( i=0;i<arraylength; i++){
        if(array[i] === target){
            return i
        }
    }
    return -1;
}
// 배열안 최 대값 찾기
function findMax(array, begin, end){
    if(begin === end){
        return array[begin]
    }else{
        return Math.max(array[begin], findMax(array, begin+1 , end))
    }
}
findMax([1,2,3,10], 0 , 3);