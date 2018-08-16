let user = { name: 'John', age: 45 }
let admin = { name: 'Bob', age: 32 }

function getName() {
  console.log(this.name);
};

user.getName = getName;
admin.getName = getName;

user.getName()  // => John
admin.getName() // => Bob

admin['getName']() // => Bob
admin[getName]()   // => TypeError: admin[getName] is not a function

getAge = () => console.log(this.name);

user.getAge = getAge;
admin.getAge = getAge;

user.getAge()  // => undefined 
admin.getAge() // => undefined  

admin['getAge']() // => undefined