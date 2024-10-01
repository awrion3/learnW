/* Day and Night */
let Body = {
  setColor: function (color) {
    document.querySelector("body").style.color = color;
  },
  setBackGColor: function (color) {
    document.querySelector("body").style.backgroundColor = color;
  },
};
let Link = {
  setColor: function (color) {
    let alist = document.querySelectorAll("ol, a");
    let i = 0;
    while (i < alist.length) {
      alist[i].style.color = color;
      i = i + 1;
    }
  },
};

function DayNightHandler(self) {
  let target = document.querySelector("body");
  if (self.value === "night") {
    Body.setBackGColor("#393e46");
    Body.setColor("white");
    self.value = "day";
    Link.setColor("darkgoldenrod");
  } else {
    Body.setBackGColor("white");
    Body.setColor("black");
    self.value = "night";
    Link.setColor("firebrick");
  }
}

/* Calendar */
function calendar() {
  let day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let d = new Date();
  setText("calendar-day", day[d.getDay()]);
  setText("calendar-date", d.getDate());
  setText("calendar-month-year", month[d.getMonth()] + " " + d.getFullYear());
}

function setText(id, val) {
  if (val < 10) {
    val = "0" + val;
  }
  document.getElementById(id).innerHTML = val;
}
window.onload = function () {
  calendar();
};
