let ladder = {
  step: 0,
  up() { this.step++; },
  down() { this.step-- },
  showStep: function() { console.log( this.step); },
};


let ladder2 = {
  step: 0,
  up() { 
    this.step++; 
    return this; 
  },
  down() { 
    this.step--; 
    return this; 
  },
  showStep: function() { console.log( this.step); },
}


ladder2.up().up().showStep()
