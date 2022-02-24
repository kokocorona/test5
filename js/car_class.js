// שיטה ישנה למחלקות ES 5

function CarClass(_parent,_name, _year, _price, _color) {
  this.parent = _parent;
  this.name = _name;
  this.year = _year;
  this.price = _price;
  this.color = _color;

  this.renderToHtml = function(){
    let div = document.createElement("div");
    div.className = "col-lg-4 border p-3";

    document.querySelector(this.parent).append(div);
    div.innerHTML += `
    <h2>${this.name}</h2>
    <div>year:${this.year}</div>
    <div>Price:${this.price} NIS</div>
    <div>Color: ${this.color}</div>
    `

  }
}