// 5. Given an object. Invert it (keys become values and values become keys). If there is more than key for that given value create an array.

var p =
    {
       a : '1', b : '2', c : '2' , d : '2'
    };

var q = {};
var keys = Object.keys(p);
for (var i = 0; i < keys.length; i++) {
    var currentKey = keys[i];
    var newKey = p[currentKey];
    if (q[newKey] === undefined){
        q[newKey] = [];
    }
    q[newKey].push(currentKey);
}
console.log(q)