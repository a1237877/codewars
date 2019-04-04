// function findShort(str){
//    var str1 = str.split(' ').map((e)=>{
//        return e.length;
//    })
//    var str2 = str1.sort((a,b)=>{
//        return a - b;
//    })
//     return str2[0];
//    }

//    const findShort = str => str.split(' ').map(w => w.length).sort((a,b) => a - b)[0];
function findShort(str){
    // return Math.min(...str.split(' ').map(w => w.length));   /*打散数组*/
    return Math.min.apply(null,str.split(' ').map(w => w.length));
}



console.log(findShort('bitcoin take over the world maybe who knows perhaps'))