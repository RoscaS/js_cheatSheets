// Is it possible to change an object declared 
// with const, how do you think?

const user = {
  name: "John"
};

// does it work?
user.name = "Pete";

// Oui, ça joue, la propriété à l'intérier de l'objet
// est modifié mais pas l'objet en lui même.

console.log(user)

// La chose suivante ne fonctionne pas:
const user = {
  poule: 'cochon'
}

// The const only protects the variable 
// itself from changing.
// In other words, user stores a reference to the object. 
// And it can’t be changed.
// But the content of the object can.