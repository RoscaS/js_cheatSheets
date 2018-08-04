
# Objects Recap

Objects are associative arrays with several special features.
They store properties (key-value pairs), where:

* Property keys must be strings or symbols (usually strings).
* Values can be of any type.

To access a property, we can use:

* The dot notation: `obj.property`.
* Square brackets notation `obj["property"]`. 
* Square brackets allow to take the key from a variable, like `obj[varWithKey]`. 

Additional operators:
* To delete a property: `delete obj.prop`.
* To check if a property with the given key exists: `"key" in obj`.
* To iterate over an object: `for(let key in obj) loop`.


Objects are assigned and copied **by reference**. In other words, a variable stores not the “object value”, but a “reference” (address in memory) for the value. So copying such a variable or passing it as a function argument copies that reference, not the object. All operations via copied references (like adding/removing properties) are performed on the same single object.

To make a “real copy” (a clone) we can use *Object.assign* or *_.cloneDeep(obj)* (loadash).


## Good stuff

```js
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
}

console.log(Object.keys(menu)) 
// => [ 'width', 'height', 'title' ]
console.log(Object.values(menu)) 
// => [ 200, 300, 'My menu' ]
```
