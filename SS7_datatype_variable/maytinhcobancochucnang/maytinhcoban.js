	/*bài này cần áp dụng nhiều thứ nên chú ý bài này hơn nó vận dụng được nhiều thứ như cách xử lí chuỗi thêm nút trên bàn phím bla bla nên cần chú 
	ý nha cách 1 dễ nhưng cách 2 sẽ xử dụng nhiều hơn  */
//kho vaix
	/*cách 1
	const screen = document.getElementById("screen");
	let result = null;
	let expression = "";
	function tinhketqua(value){
		if (result !==null && !isNaN(value)){
			expression = "";
		lastResult = null;
		screen.value = ""
		}
	screen.value += value;
	}
	function xoa (){
		screen.value = "";
	}

	function init(){
	try{
		screen.value = eval(screen.value);

	}
	catch{
		screen.value = "error";
	}
	} */
	//cách 2
	const screen = document.getElementById("screen");
	let result = null;
	let expression = "";
	function tinhketqua(value){
    const pheptinh = "+-*/.";
	const nguocpheptinh = pheptinh.includes(value);
    const socuoi = expression.slice(-1); // pheps tinhs cuoios nhas
    if (result !== null) {
      if (nguocpheptinh) {
        result = null;
      } else if (!isNaN(value) || value === ".") { // af af reset neeus pheps tinh tieeps laf soos  
        // kiem tra neu moi tinh xong va nhap soos vaof thi sex xoas pheps tinh lucs truocws
        result = null;
        expression = "";
        screen.value = "";
      }
    }

    if (pheptinh.includes(value) && pheptinh.includes(socuoi)) {
      // neeus pheps tinhs cuoi giongso pheps tinhs moiws nhapj thif qui laij thanhf 1
      expression = expression.slice(0, -1) + value; // vaf thay dausa cux banfgw daaus moiws nhaats
    } else {
      expression += value; //neeuu binhf thuongwf thif theem pheps tinhs thooi
    }
    screen.value = expression; // caapj nhaapj treen bangr
  }
	function xoa(){
		screen.value = "";
		expression = "";
		result = null;
	}
	function init(){
		try{
			const tranhlap = expression.replace(/[+\-*/.]$/, ""); // khoong cho pheps toans cuoois laf mootj pheps tinhs 
			if(!tranhlap) return; //cs thif minhf return laij 
			const ketquane = eval(tranhlap); 
			screen.value = ketquane;	//caapj nhaapj cho toanf booj keets quar ttruocws treen vaf chuooxi 
			result = ketquane;
			expression = String(ketquane);
		}
		catch{
			screen.value = "error";
			expression = "";
			result= null;
		}
		
	}
	window.addEventListener("keydown" ,e => {
		const key  = e.key;
		if(/^[0-9+\-*/.]$/.test(key)){
			tinhketqua(key);
		}
		else if (key === "Enter"){
			init();
		}
		else if (key === "Escape"){
			
			xoa();
		
		} else if (key === "Backspace") {
			
		expression = expression.slice(0, -1); // xoas kis tuwj cuoiso cungf nhas
		screen.value = expression;
	}
	})