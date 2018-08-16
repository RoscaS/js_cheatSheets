// Create a function multiplyNumeric(obj) that 
// multiplies all numeric properties of obj by 2.

function doubleNumeric(object) {
  for (let i in object) {
    if (typeof object[i] === 'number') {
      object[i] *= 2
    }
  }
}


let menu = {
  width: 200,
  height: 300,
  title: "My menu",
}

console.log(menu);
doubleNumeric(menu)
console.log(menu);


// ninja variante:
Object.keys(menu).map(i => typeof menu[i] === 'number' ? menu[i] *= 2 : null)


// Middle ground
function doubleNumeric(object) {
  for (let i in object) {
    typeof menu[i] === 'number' ? menu[i] *= 2 : null
  }
}