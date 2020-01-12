//2. Given an array of nested arrays. Write a recursive function that flattens it. (Hint create function that concats arrays).

function flatten(array, result) {
  if (array.length === 0) {
    return result
  }
  var head = array[0]
  var rest = array.slice(1)
  if (Array.isArray(head)) {
    return flatten(head.concat(rest), result)
  }
  result.push(head)
  return flatten(rest, result)
}

console.log(flatten([14,[1,[[[3,[]]]],1],0], []))