function theoAnh() {
  var el = document.getElementById("anh");
  el.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
}
function lentren() {
  var lentren = document.getElementById("anh");
  if (!lentren.style.top) lentren.style.top = "0px";
  lentren.style.top = parseInt(lentren.style.top) - 10 + "px";
  theoAnh();
}

function xuongduoi() {
  var xuongduoi = document.getElementById("anh");
  if (!xuongduoi.style.top) xuongduoi.style.top = "0px";
  xuongduoi.style.top = parseInt(xuongduoi.style.top) + 10 + "px";
  theoAnh();
}

function quaphai() {
  var quaphai = document.getElementById("anh");
  if (!quaphai.style.left) quaphai.style.left = "0px";
  quaphai.style.left = parseInt(quaphai.style.left) + 10 + "px";
  theoAnh();
}

function quatrai() {
  var quatrai = document.getElementById("anh");
  if (!quatrai.style.left) quatrai.style.left = "0px";
  quatrai.style.left = parseInt(quatrai.style.left) - 10 + "px";
  theoAnh();
}
function dichuyen(std) {
  switch (std.keyCode) {
    case 37:
      quatrai();
      break;
  }
  switch (std.keyCode) {
    case 39:
      quaphai();
      break;
  }
  switch (std.keyCode) {
    case 38:
      lentren();
      break;
  }
  switch (std.keyCode) {
    case 40:
      xuongduoi();
      break;
  }
}

function init() {
  document.onkeydown = dichuyen;
}
window.onload = init;
