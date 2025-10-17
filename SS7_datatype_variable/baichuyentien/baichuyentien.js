	function init(){
	var chuyentien = document.getElementById("chuyendoitien");
	chuyentien.onclick = chuyendoitien;
	}
	function chuyendoitien(){
		var tienviet1 = (document.getElementById("tienviet"));
		var tienanh1 = (document.getElementById("tienanh"));
		var from = document.getElementById("xuatphat");
		var to = document.getElementById("den");
		var result = document.getElementById("hienthi");
		var nhapdulieu = Number(document.getElementById("nhapdulieu").value);
		var resultne = 0;
		var tigia = 27000;
		if (from.value === tienviet1.value && to.value === tienanh1.value){
			resultne = nhapdulieu / tigia;
			result.textContent = nhapdulieu.toLocaleString("vi-VN") + "vnd" + 	resultne.toFixed(4) + "USD"
		}
		else if (from.value === tienanh1.value && to.value === tienviet1.value) {
		resultne = nhapdulieu * tigia;
		result.textContent = nhapdulieu +"USD" +resultne.toLocaleString("vi-VN") + "VNd";
	}
	else if (from.value === to.value){
		result.textContent = "cùng loại tiền " + nhapdulieu.toLocaleString("vi-VN") + " " ;
	}
	}
	window.onload = init;