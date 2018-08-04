
let id = Symbol('id');
let user = {
  [id]: 123,
  name: 'John',
  age: '32',
}

for (let i in user) {
  console.log(`${i}: ${user[i]}`)
}