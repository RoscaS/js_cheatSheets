## Function Expression vs Function Declaration
Key differences between Function Declarations and Expressions:

### The syntax
#### Function Declaration
A function, declared as a separate statement, in the main code flow.

```js
function sum(a, b) {
  return a + b;
}
```

#### Function Expression
A function, created inside an expression or inside another syntax construct. Here, the function is created at the right side of the “assignment expression” =:

```js
let sum = function(a, b) {
  return a + b;
};
```

### When a function is created by the JS engine
#### Function expression 
created when the execution reaches it and is usable from then on. Once the execution flow passes to the right side of the assignment `let sum = function…` – here we go, the function is created and can be used (assigned, called etc) from now on.

#### Function Declarations
A Function Declaration is usable in the whole script/code block.


In other words, when JavaScript prepares to run the script or a code block, it first looks for Function Declarations in it and creates the functions. After all of the Function Declarations are processed, the execution goes on.

As a result, a function declared as a Function Declaration can be called earlier than it is defined.