// קובץ ראשון של הפרוייקט עדיף שיתחיל ב APP

window.onload = function(){
  createCars();
}


function createCars(){
  let car1 = new CarClass("#id_row","opel",2012,14000,"yellow");
  car1.renderToHtml();

  let car2 = new CarClass6("#id_row","Tesla 3",2021,190000,"white");
  car2.render();
}