# Symbols

```js
let id = Symbol();  // on peut donner un identifiant aussi: let id = Symbol('poule')
let user = {
  [id]: 123,
  name: 'John',
  age: '32',
}

for (let i in user) {
  console.log(`${i}: ${user[i]}`)
}
// =>
//  name: John
//  age: 32
```

Symbol is a primitive type for unique identifiers.
Symbols are created with `Symbol()` call with an optional description.

Symbols are always different values, even if they have the same name. If we want same-named symbols to be equal, then we should use the global registry: `Symbol.for(key)` returns (creates if needed) a global symbol with key as the name. Multiple calls of `Symbol.for` return exactly the same symbol.

Symbols have two main use cases:

* “Hidden” object properties. If we want to add a property into an object that “belongs” to another script or a library, we can create a symbol and use it as a property key. A symbolic property does not appear in for..in, so it won’t be occasionally listed. Also it won’t be accessed directly, because another script does not have our symbol, so it will not occasionally intervene into its actions.
    
So we can “covertly” hide something into objects that we need, but others should not see, using symbolic properties.

* There are many system symbols used by JavaScript which are accessible as `Symbol.*.` We can use them to alter some built-in behaviors.


Technically, symbols are not 100% hidden. There is a built-in method `Object.getOwnPropertySymbols(obj)` that allows us to get all symbols. Also there is a method named `Reflect.ownKeys(obj)` that returns all keys of an object including symbolic ones. So they are not really hidden. But most libraries, built-in methods and syntax constructs adhere to a common agreement that they are. And the one who explicitly calls the aforementioned methods probably understands well what he’s doing.