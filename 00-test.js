function Title() {
  this.data = '';
  this.len = '35';
  this.label = 'Titre';
}

function SubTitle(label = 'Sous titre') {
  this.data = '';
  this.type = 'textarea';
  this.len = '200';
  this.rows = '2';
  this.label = label;
}

function Text(label = 'Texte', rows = 4) {
  this.data = '';
  this.type = 'textarea';
  this.len = '400';
  this.rows = rows;
  this.label = label;
}

function Image() {
  this.data = '';
  this.label = 'Image';
}

function Icon() {
  this.data = '';
  this.label = 'Icone';
}


function Promo() {
  this.component = 'Promo';
  this.url = 'promo/1/';
  this.state = {
    title: new Title(),
    text1: new Text(),
    image: new Image()
  };
}

function Presentation() {
  this.component = 'Presentation';
  this.url = 'presentation/1/';
  this.state = {
    title: new Title(),
    subTi: new SubTitle(),
    text1: new Text('Texte 1'),
    text2: new Text('Texte 2'),
    image: new Image()
  };
}

function Events() {
  this.component = 'Events';
  this.url = 'gallery/1/';
  this.state = {
    title: new Title(),
    subTi: new SubTitle(),
  };
}

function Hero() {
  this.component = 'Hero';
  this.url = 'hero/1/';
  this.state = {
    L_title: new Title(),
    C_title: new Title(),
    R_title: new Title(),
    L_text: new Text(),
    C_text: new Text(),
    R_text: new Text(),
    L_icon: new Icon(),
    C_icon: new Icon(),
    R_icon: new Icon(),
  };
}

function Review() {
  this.component = 'Review';
  this.url = 'review/1/';
  this.state = {
    title: new Title(),
    subTi: new SubTitle(),
  };
}

function TextsStores() {
  return [
    new Promo(),
    new Presentation(),
    new Events(),
    new Hero(),
    new Review(),
  ]
}



