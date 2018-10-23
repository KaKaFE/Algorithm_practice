var stringSet = ['a', 'b', 'c'];
var nullSet = [[]];
var result = [];
function main(arr, n) {
  if(n === 0){
    result.push(nullSet[n])
    result.push(stringSet[n])
    solustion(result, n+1)
  }else solustion(arr, n)
}
function solustion(result, n){
  if(n === stringSet.length) {
    console.log(result)
    return;
  }
  var result2 = []
  result.forEach(v =>{
    result2.push(v)
    result2.push(v.concat(stringSet[n]))
  })
  main(result2, n+1)
}
main(stringSet, 0)