function caculateYearBorn(yearBorn) {
  var currentim = new Date();
  var currentyear = currentim.getFullYear();
  return currentyear - yearBorn;
}
var name = prompt("ten ban la gi");
var yearBorn = prompt("nhap nam sinh cua ban ");
var tuoicuaban = caculateYearBorn(yearBorn);
console.log("tuoi cua  ban la " + tuoicuaban);
var message = ""
if(tuoicuaban>10){
  console.log("ban gia vai nhon")
  if(name= "vu"){
    
    console.log("nguoi quen nha");
    var i = 0;
    while(i < 5){
    message += " good";
  i++;
  }
}
console.log(message)
}
else{
  console.log("ban con tre nha")
}

var ne = confirm("ban la con gai a");
if(ne === true){
  console.log("vang bi be de");
}
else {
  console.log("ban ngu qua");
}