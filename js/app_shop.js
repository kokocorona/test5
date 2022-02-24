window.onload = () => {
  init();
}

const init = () => {
  doApi();
}

// like function doApi(){}
// מבצע בקשה ורק אחרי שהפייץ מסיים קוראים ליצירת
// המוצרים
const doApi = () => {
  let url = "http://fs1.co.il/bus/shop.php";
  fetch(url)
  .then(resp => resp.json())
  .then(data => {
    console.log(data);
    createAllProducts(data);
    // console.table(data);
  })
}

const createAllProducts = (_ar) => {
  // עובר על כל המערך מהג'ייסון ומייצר אותם עם המחלקה
  _ar.forEach((item) => {
    let prod = new ProdClass("#id_row",item);
    prod.render();
  })
}