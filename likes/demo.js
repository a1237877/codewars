// 1.跟 phone number 一样的解法
// 字符串模式  数组的遍历
// 2.多种模式情况  [下标]   做一个一一对应
// nums.length
function likes(names) {
    // 规则模板数组
    var templates = [
      'no one like this',
      '{name} like this',
      '{name} and {name} like this',
      '{name}, {name} and {name} like this',
      '{name}, {name} and {n} others like this'
    ];
    var idx = Math.min(names.length, 4);
    return templates[idx].replace(/{name}|{n}/g, function(val) {
      return val === '{name}'? names.shift(): names.length;
    })
  }
  
console.log(likes([]));
console.log( likes(['lsw','wzx']));
console.log( likes(['lsw','wzx','bbt','xnp']));
