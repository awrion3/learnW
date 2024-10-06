/* Day and Night */
let Body = {
  setBackGColor: function (color) {
    document.querySelector("body").style.backgroundColor = color;
  },
};
let Fig = {
  setBackGColor: function (color) {
    document.querySelector(".figure").style.backgroundColor = color;
  },
};

function DayNightHandler(self) {
  let target = document.querySelectorAll("body, .figure");
  if (self.value === "night") {
    Body.setBackGColor("#393e46");
    Fig.setBackGColor("#876464");
    self.value = "day";
  } else {
    Body.setBackGColor("white");
    Fig.setBackGColor("#1a1831");
    self.value = "night";
  }
}

/* Back to Top */
function calcScrollValue() {
  let scrollProgress = document.getElementById("progress");

  let pos = document.documentElement.scrollTop;

  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  let scrollValue = Math.round((pos * 100) / calcHeight);

  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }

  scrollProgress.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
  });

  scrollProgress.style.background =
    "conic-gradient(#dc143c " +
    scrollValue +
    "%, #d7d7d7 " +
    scrollValue +
    "%)";
}

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

/* Image Viewer */
function zoomSwitch(self) {
  let map = document.getElementById("map");

  if (self.value === undefined) {
    self.value = 0;
  }

  if (self.value === 0) {
    map.style.width = "35rem";
    map.style.height = "40rem";
    self.value = 1;
  } else {
    map.style.width = "100%";
    map.style.height = "100%";
    self.value = 0;
  }
}
