# Garbage Collection

* [source](https://javascript.info/garbage-collection)

The main things to know:

* Garbage collection is performed automatically. We cannot force or prevent it.
* Objects are retained in memory while they are reachable.
* Being referenced is not the same as being reachable (from a root): a pack of interlinked objects can become unreachable as a whole.

## Simple example

```js
// user has a reference to the object
let user = {
  name: "John"
};
```
![Image](https://i.imgur.com/t3hfYWx.png)
If the value of user is overwritten, the reference is lost:

```js
user = null;
```

![Image](https://i.imgur.com/em2dR1O.png)

## Internal algorithms

The basic garbage collection algorithm is called “mark-and-sweep”.
The following “garbage collection” steps are regularly performed:

* The garbage collector takes roots and “marks” (remembers) them.
* Then it visits and “marks” all references from them.
* Then it visits marked objects and marks their references. All visited objects are remembered, so as not to visit the same object twice in the future.
* …And so on until there are unvisited references (reachable from the roots).
* All objects except marked ones are removed.

For instance, let our object structure look like this:
![Image](https://i.imgur.com/mnOikG5.png)

We can clearly see an “unreachable island” to the right side. Now let’s see how “mark-and-sweep” garbage collector deals with it.

The first step marks the roots:
![Image](https://i.imgur.com/rZTngbP.png)

Then their references are marked:
![Image](https://i.imgur.com/pIbQl6g.png)

…And their references, while possible:
![Image](https://i.imgur.com/kH09xRK.png)

Now the objects that could not be visited in the process are considered unreachable and will be removed:

![Image](https://i.imgur.com/SHoI4iT.png)

<hr>

> Modern engines implement advanced algorithms of garbage collection.