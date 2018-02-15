Date.prototype.getWeekNumber = function(){
  var d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
  var dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
  return Math.ceil((((d - yearStart) / 86400000) + 1)/7)
};
//Borrowed from https://stackoverflow.com/questions/6117814/get-week-of-year-in-javascript-like-in-php
function writeLists() {

  config.forEach(function(element) { //Intial loop for the array of categories
    //Intial ul and li header
    //loop trough all the contents of the second array in the object
    console.log(element);
    document.write("<ul style='color:" + element.color + ";'>");
    if(element.name != 'week'){
    document.write("<li>" + element.name + "</li>");
    } else {
    document.write("<li>Uni Week " + new Date().getWeekNumber() + "</li>");
    }
    element.listItems.forEach(function(item) { //each category list item
      document.write("<li");
      if (item.color != "parent") { //unique color check
        document.write(" style='color:" + item.color + ";'");
      }
      document.write("><a href='" + item.url + "'>" + item.name + "</a>");
      if (item.sup == "true") { //sup list check
        item.supInfo.forEach(function(info) { //sup list loop
          document.write("<a href='" + info.url + "'><sup class='small'>" + info.name + "</sup></a>");
        },)
      }
      document.write("</li>");
    }, );
    document.write("</ul>");
  }, this);
}

function searchParse() {
  var data = document.getElementById("search").value;

  var firstWord = data.replace(/ .*/,'');
/*
  switch (firstWord) {
    case w:

      break;
    default:

  }
*/
  alert(firstWord + data);
}
