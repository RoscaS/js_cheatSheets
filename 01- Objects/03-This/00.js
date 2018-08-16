let user = {
  name: 'John',
  age: 30,
};

user.sayHi = function() { console.log('Hello'); };
user.sayHi()

user.sayBye = () => console.log('Bye');
user.sayBye()


let admin = {
  name: 'Bob',
  age: 32,
  sayHi() { console.log('Yo!'); },
  sayBye: () => console.log('Bye'),
}

admin.sayHi();
admin.sayBye();