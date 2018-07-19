// Borrowed from https://stackoverflow.com/questions/6117814/get-week-of-year-in-javascript-like-in-php
Date.prototype.getWeekNumber = function() {
  var d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
  var dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));

  return Math.ceil((((d - yearStart) / 86400000) + 1) / 7)
};

function writeLists() {
  config.forEach(function(element) { // Initial loop for the array of categories
    // Intial ul and li header
    // Loop trough all the contents of the second array in the object
    document.write("<ul style='color:" + element.color + ";'>");
    if (element.name != 'week') {
      document.write("<li>" + element.name + "</li>");
    } else {
      document.write("<li>Uni Week " + new Date().getWeekNumber() + "</li>");
    }
    element.listItems.forEach(function(item) { //each category list item
      document.write("<li");
      if (item.color != "parent") { // Unique color check
        document.write(" style='color:" + item.color + ";'");
      }
      document.write("><a href='" + item.url + "'>" + item.name + "</a>");
      if (item.sup == "true") { // sup list check
        item.supInfo.forEach(function(info) { // sup list loop
          document.write("<a href='" + info.url + "'><sup class='small'>" + info.name + "</sup></a>");
        },)
      }
      document.write("</li>");
    },);
    document.write("</ul>");
  }, this);
  document.getElementById("search").focus();
}

function searchParse() {
  document.getElementsByTagName("body")[0].style = "visibility: hidden;"; // #3d3d3d way better background grey background-color: red;
  var data = document.getElementById("search").value;
  var firstWord = data.replace(/ .*/, '');

    switch (firstWord) {
      case "y":
        var searchTerm = data.substr(2);
        if (searchTerm == "") {
          window.location.href = "https://www.youtube.com/feed/subscriptions";
        } else {
          window.location.href = "https://www.youtube.com/results?search_query=" + searchTerm;
        }
        break;
      case "4":
        var searchTerm = data.substr(2);
        if (searchTerm == "") {
          window.location.href = "https://4chan.org/";
        } else {
          window.location.href = "https://boards.4chan.org/" + searchTerm + "/";
        }
        break;
      case "r":
        var searchTerm = data.substr(2);
        if (searchTerm == "") {
          window.location.href = "https://reddit.com/";
        } else {
          window.location.href = "https://reddit.com/r/" + searchTerm + "/";
        }
        break;
      case "t":
        var searchTerm = data.substr(2);
        if (searchTerm == "") {
          window.location.href = "https://tweetdeck.twitter.com/";
        } else {
          window.location.href = "https://twitter.com/search?q=" + searchTerm;
        }
        break;
      case "keep":
        var searchTerm = data.substr(5);
        if (searchTerm == "") {
          window.location.href = "https://keep.google.com/u/0/";
        } else {
          window.location.href = "https://keep.google.com/u/" + searchTerm + "/";
        }
        break;
      case "gmail":
        var searchTerm = data.substr(6);
        if (searchTerm == "") {
          window.location.href = "https://mail.google.com/mail/u/0/";
        } else {
          window.location.href = "https://mail.google.com/mail/u/" + searchTerm + "/";
        }
        break;
      case "calendar":
        window.location.href = "https://calendar.google.com/calendar/r";
        break;
      case "github":
        window.location.href = "https://github.com";
        break;
      default:
        window.location.href = "https://startpage.com/do/search?language=english&cat=web&query=" + data;
    }
}
