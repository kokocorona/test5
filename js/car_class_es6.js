// שיטה חדשה שנשתמש בה מהיום ES6 + 2021
class CarClass6{
  constructor(_parent,_name, _year, _price, _color) {
    this.parent = _parent;
    this.name = _name;
    this.year = _year;
    this.price = _price;
    this.color = _color;
  }

  render(){
    let div = document.createElement("div");
    div.className = "col-lg-4 border p-3";

    document.querySelector(this.parent).append(div);
    div.innerHTML += `
    <h2>${this.name}</h2>
    <div>year:${this.year}</div>
    <div>Price:${this.price} NIS</div>
    <div>Color: ${this.color}</div>
    `

    let btn = document.createElement("button");
    btn.className = "btn btn-success mt-3";
    btn.innerHTML = "show USD price";

    div.append(btn);
    let obj = {name:"koko"}
    // btn.name = this.name;
    //let _this = this
    // האזנה לאירוע 
    // הפרמטר הראשון זה האירוע שאנחנו רוצים להאזין בלי המילה און
    // והפרמטר השני פונקציה בדרך כלל תיהיה אנונימית
    // bind -> מעביר לפונקציה של האירוע
    // שהטיז מתייחס תטיז של המחלקה ולא לכפתור
    // btn.addEventListener("click" , function(){
    //   alert(this.name);
    // }.bind(this))
    // בזכות הארוו פאנקשן אין צורך בביינד
    // הפוקנציה יודע שטיז מתייחס למחלקה ולא לכפתור
    btn.addEventListener("click",() => {
      alert(`USD PRICE: ${(this.price/3.2).toFixed(2)}`);
    })
  }
}