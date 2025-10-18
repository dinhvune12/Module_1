function sangphai(){
	var anhsangphai = document.getElementById("traibanh");
		if (!anhsangphai.style.right) anhsangphai.style.right = "0px";
	anhsangphai.style.right = parseInt(anhsangphai.style.right ) - 500 + 'px'; 
}
function sangtrai(){
	var anhsangtrai = document.getElementById("traibanh");
	if (!anhsangtrai.style.right) anhsangtrai.style.right = "0px";
	anhsangtrai.style.right =parseInt( anhsangtrai.style.right ) +500 + 'px'; 
}
function init(){
document.getElementById("nutsangphai").onclick = sangphai;
document.getElementById("nutsangtrai").onclick = sangtrai;

}
window.onload = init;