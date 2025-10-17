
function chuyendoinhietdo(){
	var nhietdo = Number(document.getElementById("nhietdo").value);
	var chuyendoif = (nhietdo / 5) * 9 + 32;
	document.getElementById("chuyendoinhietdo").textContent = chuyendoif;
}
function init(){
var nutnam = document.getElementById("chuyendoi");
nutnam.onclick = chuyendoinhietdo;
}
window.onload = init;