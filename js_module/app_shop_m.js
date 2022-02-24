// לייבא את המחקלה שנמצא בפרודקט
// כדי שנוכל לבצע אימפורט - אנחנו חייבים קודם
// לעשות אקספורט/ייצוא
import ProdClass from "./productClass_m.js";
// שעושים אימפורט לקובץ שיש בו אקספורט רגיל
// אז חייבים את הסוגריים המסולסלים ולתת את השם המדוייק
// של האובייקט שעשינו לו אימפורט
import {location , location2} from "./example_export_file.js"

window.onload = () => {
  init();
}

const init = () => {
  doApi();
  console.log(location)
  console.log(location2)
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