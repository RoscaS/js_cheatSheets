# JS: DOMS CheatSheet

## Selecting Elements

* `document.getElementById('id')`:           finds element by id
* `document.getElementsByClassName('name')`: finds elements by class name
* `document.getElementsByTagName('name')`:   finds elements by tag name

## Working with the DOM

* `el.childNodes`:        returns an array of an element's child nodes.
* `el.firstChild`:        returns the first child node of an element.
* `el.lastChild`:         returns the last child node of an element.
* `el.hasChildNodes`:     returns true if an el has child nodes, else false.
* `el.nextSibling`:       returns the next node at the same tree level.
* `el.previousSibling`:   returns the previous node at the same tree level.
* `el.parentNode`:        returns the parent node of an element.


### Combo

Soit:
```html
<ul id='Liste'>
  <li><a>Home</a></li>
  <li><a href="">Examples</a></li>
  <li><a href="">Features</a></li>
  <li><a href="">Team</a></li>
  <li><a href="">Help</a></li>
</ul>
```

Alors:

```js
let liste = document.getElementById('Liste')
console.log(liste.getElementsByTagName('a'))
```

Retourne une liste (`HTMLCollection`) des 4 éléments `<a>`.


## Creating elements

* `el.cloneNode()`: clones an element and returns the resulting node.
* `document.createElement(element)`: creates a new element node.
* `document.createTextNode(text)`: creates a new text node.

```js
let node = document.createTextNode("Some new text"); // text
let newP = document.createElement("p");              // <p>

newP.appendChild(node); // ajoute le texte à l'elément

let titre = document.getElementById('Titre') // selectionne un elément du DOM
titre.appendChild(newP) // append le nouvel élément


// Insère `new_node` as child of `el` before `child_of_el`
el.insertBefore(new_node, child_of_el)  
```


## Removing elements

* `el.removeChild(child_of_el)`

```html
<div id="demo">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

<script>
var parent = document.getElementById("demo");
var child = document.getElementById("p1");
parent.removeChild(child);
</script>
```

## Replacing Elements

* `el.replaceChild(newNode, oldNode)`

```html
<div id="demo">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

<script>
var p = document.createElement("p");
var node = document.createTextNode("This is new");
p.appendChild(node);

var parent = document.getElementById("demo");
var child = document.getElementById("p1");
parent.replaceChild(p, child);
</script>
```


## Attributs & content

```html
<ul>
  <li><a id='Link'>Home</a></li>
  <img id='Image' src='http://ici.com/01.jpg'/>
</ul>

<script>
  // Contenu
  let el = document.getElementById('Link') 
  console.log(el.innerHTML) // => Home
  el.innerHTML = 'Poule'
  console.log(el.innerHTML) // => Poule

  // Attributs (valable pour tous les attrs)
  el = document.getElementById('Image') 
  console.log(el.src) // => http://ici.com/01.jpg
  el.src = 'http://la.net/02.png'
  console.log(el.src) // => http://la.net/02.png
</script>
```


## Changing style

```html
<div id="demo" style="width:200px">some text</div>

<script>
  let x = document.getElementById("demo");
  x.style.color = "6600FF";
  x.style.width = "100px";
</script>
```

*Toutes les propriétés peuvent être changées avec du JS mais il est important de noter qu'on ne peut pas utiliser les `-` dans les noms de propriétés. Ils sont remplacés par une notation en camelCase. `background-color` devient `backgroundColor`*


## Animations

```html
<style>
#container {
  width: 200px;
  height: 200px;
  background: green;
  position: relative;
}
#box {
  width: 50px;
  height: 50px;
  background: red;
  position: absolute;
}
</style>
<div id="container">
   <div id="box"> </div>
</div>
```

L'élément `box` est comprise dans un élément `container`. **Noter les attributs `position` de ces deux éléments:** Le `container` est `relatif` et `box` est `absolute`! L'animation de `box` sera donc relative à `container`.

![Image](https://i.imgur.com/kiL0wO6.png)

Pour créér l'animation, il faut changer les propriétés d'un élément tous les $\Delta t$ avec un $t$ petit. On utilise la méthode

* `setInterval()`

```js
let t = setInterval(move, 500);
```

Ce code crée un timer qui appel la fonction `move()` (qu'il faut définir) toutes les 500ms.

```js
let pos = 0; // position de départ
let box = document.getElementById('box');

function move() {
  pos ++;
  box.style.left = pos+'px';
}
```

Pour stopper l'animation une fois que `box` atteint la fin du container, on ajoute un conditionnel à `move()` et on utilise la méthode 

* `clearInterval()` 

Pour stopper le timer.

```js
function move() {
  if (pos >= 150) {
    clearInterval(t)
  } 
  else {
    pos++;
    box.style.left = pos+'px';
  }
}
```

## Handling Events

Events usuels:
![Image](https://i.imgur.com/6NauT0m.png)

Ces events peuvent être ajoutés comme attribut HTML d'un tag:
```html
 <p onclick="someFunc()">some text</p>
```

### Deux façons de handle les events

#### html

```html
<button onclick="show()">Click Me</button>
<script>
function show() {
  alert("Hi there");
}
</script>
```

#### JS

```js
let x = document.getElementById("demo");
x.onclick = function () {
  document.body.innerHTML = Date();
}
```

### Events
* `onload`
* `onunload`

Sont triggered quand l'utilisateur entre ou quite la page.

De façon similaire, l'event

* `window.onload`

est utilisé après que la page soit entièrement chargée.

```js
window.onload = function() {
  // du code
}
```

L'event 

* `onchange`

est principalement utilisé avec les champs de text. L'event handler est call quand le text est modifié et le focus perdu:

```html
<input type="text" id="name" onchange="change()">
<script>
function change() {
 let x = document.getElementById("name");
 x.value= x.value.toUpperCase();
}
</script>
```

### Event Listners

La méthode 

* `addEventListener()`

attache un event handler à un élément sans écraser d'autres events handlers. Il est possible de stacker différents events mais aussi plusieurs fois le même.

```js
el.addEventListener("event", function, useCapture);
```

**Dans le JS, on ne préfixe pas les events avec "on"**

1. type (*click*, *mousedown*, ...)
2. fonction à appeler
3. *optionnel* un bool qui spécifie si on veut faire  remonter (bubbling) ou capturer l'event.

Ex:
```js
el.addEventListener("click", myFunction);
el.addEventListener("mouseover", myFunction);

function myFunction() {
  alert("Hello World!");
}
```

Pour rettirer un event handler on utilise

* `removeEventListener("event", function)`

### Propagation (bubbling)

Concerne la définition de l'ordre d'activation des events dans le cas d'éléments nestés.

Si nous avons un `<p>` dans un `<div>` et que l'utilisateur clique sur le `<p>` qui possèdent tous deux un event `click`, lequel devrait être activé en premier?

Deux façons:

* **bubbling** goes **up** the DOM
* **capturing** goes **down** the DOM

Ces façons de faire sont déterminées par le 3e argument de la méthode `addEventListener()` dont la position par défaut est **false** et définit l'event en mode *bubbling*.

* `el.addEventListener('click', myFunction, true)`: **capturing**
* `el.addEventListener('click', myFunction, false)`: **bubbling**

