// 字符串拼接法  下标选取
// const createPhoneNumber = function(arr){
//     return  "(" + arr[0] + arr[1] + arr[2] + ") " +arr[3] + arr[4] +arr[5] + "-" +arr[7] +arr[8]+arr[9];
//     //可以用ES6云括号  `(${arr[0]}${arr[1]})`
// }
// const createPhoneNumber = (arr)=>
//     "(" + arr[0] + arr[1] + arr[2] + ") " +arr[3] + arr[4] +arr[5] + "-" +arr[7] +arr[8]+arr[9];

// console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0])+'1');


// 方法2：
function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";
    for(var i = 0;i<numbers.length;i++){
        format = format.replace('x',numbers[i])
    }
    return format;
}
console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]));
