// קשור לפרוייקט של החנות shop.html
class ProdClass {
  // constructor(_parent , _cat, _name, _price)
  constructor(_parent, _item) {
    this.parent = _parent;
    this.name = _item.name;
    this.cat = _item.cat;
    this.price = _item.price;
    this.img = _item.image;
  }

  render() {
    let div = document.createElement("div");
    div.className = "col-lg-4 border p-3";

    document.querySelector(this.parent).append(div);

    div.innerHTML += `
    <div class="badge bg-success float-end">category: ${this.cat}</div>
        <h2>${this.name}</h2>
        <div>Price:${this.price} NIS</div>
    `
  }
}