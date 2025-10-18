function tinhcan(){
	var cannang = Number(document.getElementById("cannang").value);
	var chieucang = Number(document.getElementById("chieucao").value);
	var indulieu = document.getElementById("ketqua");
	var anh = document.getElementById("anhdong");
	var BMI = cannang / (chieucang *chieucang);
	if (BMI < 18.5){
		indulieu.textContent = BMI + "ban rat nhe an len ddi " ;
		anh.src = "b0067ade5e832d2aefec8ee9bda50fdc.gif";
	}
	else if (BMI<25 && BMI > 18.5){
		indulieu.textContent = BMI + "ban hoi nha an len ddi " ;
		anh.src = "b0067ade5e832d2aefec8ee9bda50fdc.gif";
	}
	else if (BMI < 30 && BMI > 25){
		indulieu.textContent = BMI + "ban binh thuong khoi an " ;
		anh.src = "b0067ade5e832d2aefec8ee9bda50fdc.gif";
	}
	else if (BMI > 30 ){
		indulieu.textContent = BMI + "ban rat map nhin di " ;
		anh.src = "b0067ade5e832d2aefec8ee9bda50fdc.gif";
	}
}
function init (){
document.getElementById("duaketqua").onclick = tinhcan;
}
window.onload = init;