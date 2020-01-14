
//4. Given an array and a number N.  Write a recursive function that rotates an array N places to the left. (Hint: to add element to the beginning use arr.unshift())


Array.prototype.rotate = function(n) {
 while(this.length && n++) {
   this.unshift(this.pop());
 }
 return this;
}
console.log(['a','b','c','d','e','f','g','h'].rotate(3))
