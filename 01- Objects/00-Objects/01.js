// Write the function isEmpty(obj) which returns true 
// if the object has no properties, false otherwise.

function isEmpty(object) {
  for (let key in object) {
    return false
  }
  return true
}

let obj = {a: 1, b: 2, c: 3};
// let obj = {};

console.log(isEmpty(obj))
