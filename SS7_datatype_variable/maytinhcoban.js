

//cách 1 :
// function phepcong(){
// 	var so1 = Number(document.getElementById("sothu1").value);
//   var so2 = Number(document.getElementById("sothu2").value);
// 	var ketquan = so1 + so2;

// 	document.getElementById("indulieu").textContent = ketquan +" ";
// }

// function pheptru(){
// 	var so1 = Number(document.getElementById("sothu1").value);
//   var so2 = Number(document.getElementById("sothu2").value);
// 	var ketquan = so1 - so2;
// 	document.getElementById("indulieu").textContent = ketquan + " ";
// }

// function phepchia(){
// 	var so1 = Number(document.getElementById("sothu1").value);
//   var so2 = Number(document.getElementById("sothu2").value);
// 	var ketquan = so1 / so2;
// 	document.getElementById("indulieu").textContent = ketquan + " ";
	
// }
// function phepnhan(){
// 	var so1 = Number(document.getElementById("sothu1").value);
//   var so2 = Number(document.getElementById("sothu2").value);
// 	var ketquan = so1 * so2;
// 	document.getElementById("indulieu").textContent = ketquan + " ";
// }

// function init(){
// 	document.getElementById("cong").onclick = phepcong;
// 	document.getElementById("tru").onclick = pheptru;
// 	document.getElementById("chia").onclick = phepchia;
// 	document.getElementById("nhan").onclick = phepnhan;
// }
/* cách 2 */
	function chon(chonbien){
	var so1 = Number(document.getElementById("sothu1").value);
		var so2 = Number(document.getElementById("sothu2").value);
		var ketqua = 0;
		switch (chonbien){
			case "phepcong":
			ketqua = so1 + so2;
			break;
			
			case "pheptru":
			ketqua = so1 - so2;
			break;
			case "phepnhan":
			ketqua = so1 * so2;
			break;
			case "phepchia":
			ketqua = so1 / so2;
			break;

		}
		document.getElementById("indulieu").textContent = ketqua;
	}
	function init(){
		document.getElementById("cong").onclick =//chú ý chỗ funtion tại vì hàm này hơi lạ 
		function(){ chon("phepcong");};
		document.getElementById("tru").onclick = function(){ chon("pheptru");};
		document.getElementById("chia").onclick =function(){ chon("phepchia");};
		document.getElementById("nhan").onclick =function(){  chon("phepnhan");};
	}

	window.onload = init;