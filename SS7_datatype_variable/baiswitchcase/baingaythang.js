function init (){
document.getElementById("tinhsongay").onclick = tinhngay;
}
function tinhngay(nhapngay){
nhapngay = Number(document.getElementById("thang").value);
var hienthi = document.getElementById("hienthi");
switch(nhapngay){
	case 1 :
		hienthi.textContent = "thang co 31 ngay"; 
		break;
	case 2 :
		hienthi.textContent = "thang co 28 hoac 29 ngay"; 
		break;
	case 3 :
		hienthi.textContent = "thang co 31 ngay"; 
		break;
	case 4 :
		hienthi.textContent = "thang co 30 ngay"; 
		break;
	case 5 :
		hienthi.textContent = "thang co 31 ngay"; 
		break;
	case 6 :
		hienthi.textContent = "thang co 30 ngay"; 
		break;
	case 7 :
		hienthi.textContent = "thang co 31 ngay"; 
		break;
	case 8 :
		hienthi.textContent = "thang co 31 ngay"; 
		break;
	case 9 :
		hienthi.textContent = "thang co 30 ngay"; break;
	case 10 :
		hienthi.textContent = "thang co 31 ngay"; break;
	case 11 :
		hienthi.textContent = "thang co 30 ngay"; break;
	case 12:
		hienthi.textContent = "thang co 31 ngay"; break;

}
}
window.onload = init;