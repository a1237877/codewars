有一段字符

-如果字符超过140字 ，返回false
-如果是空字符串，返回false
-以#开始 
-每个单词都大写

"How are you".split(' ')
(3) ["How", "are", "you"]
用join（' '） 来把数组又重新组成字符串

"How are you".split(' ').map((w)=>{ return w.charAt(0).toUpperCase() + str.slice(1)})
charAt() 方法可返回指定位置的字符    slice（num） 切割字符串  从num 切割

-将单词字符串 ，变成单词数组 split(' ')
-数组里面每个元素都是单词
map 遍历每个元素 ，使用箭头函数
-每个单词 charAt(0)  第一个字符 toUpperCase() 
-除第一个字符后，其余的呢？slice(1); 表示从第一个字符开始切割