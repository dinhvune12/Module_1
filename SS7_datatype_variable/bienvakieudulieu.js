
function tongdiemtrungvatongdiem(){
	
	var diemtoan =parseInt(document.getElementById("diemtoan").value) ;
	var diemhoa = parseInt(document.getElementById("diemhoa").value);
	var diemvan = parseInt(document.getElementById("diemvan").value);
	
	var diemtong=parseInt((diemhoa + diemtoan+ diemvan));
	var diemtrungbinh = diemtong / 3;
	var indulieudiemtong = document.getElementById("tongdiem");
	indulieudiemtong.textContent = diemtong;
	var indulieutrungbinh = document.getElementById("diemtrungbinh");
	indulieutrungbinh.innerHTML= diemtrungbinh;
}
function init(){
	var tinhtongdiem = document.getElementById("tinhtongdiem");
	tinhtongdiem.onclick = tongdiemtrungvatongdiem;
}
window.onload = init;