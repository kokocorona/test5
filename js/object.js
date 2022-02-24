// let car1_obj = new Object();
let car1_obj = {
  company:"mazda",
  color:"red",
  year:2019,
  printInfo:function(){
    document.querySelector("#id_h2").innerHTML += `
      company: ${this.company} <br>
      color: ${this.color}
    `
  }
};

let car2_obj = {
  company:"toyota",
  color:"blue",
  year:2019,
  printInfo:function(){
    document.querySelector("#id_h2").innerHTML += `<br>
      company: ${this.company} <br>
      color: ${this.color} 
     
    `
  }
};

let car3_obj = car2_obj;
car3_obj.company = "Ferrari";


// primitve - משתנים פרימטיבים כגון סטרינג
// מספרים ובוליאן משווים את עצמם לפי
// VALUE
// ושינוי של הערך שלהם לא משנה את המשתנה הקודם שהושווה להם
let word1 = "hello";
let word2 = word1;
word1 = "Bye"

// לעומת אובייקטים,מערכים ופונקציות שכן 
// BY VALUE
// ושינוי של אחד ששוה לשני משפיע על שניהם בברירת מחדל

// D.R.Y - DONT REPEAT YOUR SELF

window.onload = function(){
  // console.log(car1_obj.company);
  console.log(car1_obj["company"], car1_obj["color"]);

  car1_obj.printInfo();
  car2_obj.printInfo();
}