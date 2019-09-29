var str = "try hello world";
var ans = [];
var str1 = str
  .split(" ")
  .forEach(v => {
    ans.push(lowUpper(v));
  })

console.log(ans.join(' '))

function lowUpper(str) {
  var b = [];
  str.split("").forEach((v, i) => {
    if (i % 2 === 0) b.push(v.toUpperCase());
    if (i % 2 === 1) b.push(v.toLowerCase());
  });
  return b.join("");
}



//  다른사람의 풀이
str.toUpperCase().replace(/(\w)(\w)/g, function(a) {
  return a[0].toUpperCase() + a[1].toLowerCase();
});
