var x = document.getElementById("tongsanpham");

var arr = JSON.parse(localStorage.getItem("cart")) || [];
x.innerText = arr.length;

function markAddedProducts() {
  document.querySelectorAll(".sanpham").forEach(function (sp) { // duyệt qua tất cả div có class là sanpham
    var btn = sp.querySelector(".hi"); //tìm nút hi
    if (!btn) return;

    var onclick = btn.getAttribute("onclick") || ""; // lấy nội dung onclick đa nhập vào 
    var match = onclick.match(/themsanpham\((\d+)/);
    if (!match) return;

    var id = parseInt(match[1], 10);

    var found = arr.some(function (item) {  // trả về true nếu có ít nhất 1 phần tủ thoả mả 
      return item[0] == id;
    });

    if (found) sp.classList.add("added");
    else sp.classList.remove("added");
  });
}

function themsanpham(id, ten, gia) {
  var exist = false;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i][0] == id) {
      arr[i][3]++;
      exist = true;
      break;
    }
  }

  if (!exist) {
    arr.push([id, ten, gia, 1]);
  }

  localStorage.setItem("cart", JSON.stringify(arr));
  x.innerText = arr.length;
  markAddedProducts();
}

var tooltip = document.getElementById("tooltip");

document.addEventListener("mousemove", function (e) {
  var item = e.target.closest(".sanpham");
  if (!item) {
    tooltip.style.display = "none";    // nếu không lia chuột vào thì bản thông tin bị ẩn chỗ class sản phẩm
    return;
  }

  var ten = item.querySelector("h2")?.innerText || "";
  var gia = item.querySelector(".gia")?.innerText || "";
  var mota = item.querySelector(".mota")?.innerText || "Không có mô tả";

  var rect = item.getBoundingClientRect();  // lấy vị trí toạ độ của chuột
  tooltip.style.display = "block";
  tooltip.style.top = rect.top + 20 + "px";
  tooltip.style.left = rect.left + 20 + "px";

  tooltip.innerHTML = `
      <b>${ten}</b><br>
      Giá: ${gia}<br>
      Mô tả: ${mota}
  `;
});
function hienthiform() {
  document.getElementById("formsp").style.display = "block";
}
function anForm() {
  document.getElementById("formsp").style.display = "none";
}
function themsanphammoi() {
  var ten = document.getElementById("ten").value;
  var gia = document.getElementById("gia").value;
  var mota = document.getElementById("mota").value;
  var file = document.getElementById("img").files[0];

  if (!file) {
    alert("Bạn chưa chọn ảnh");
    return;
  }
  var reader = new FileReader();
  reader.onload = function (e) {
    var imgSrc = e.target.result; // lấy dữ liệu ảnh
    var id = Date.now(); //tạo id cho nó
    var html =
      '<div class="sanpham">' +
      '<div class="hamnho">' +
      "<h2>" +
      ten +
      "</h2>" +
      '<img src="' +
      imgSrc +
      '">' +
      '<p class="gia">' +
      gia +
      "</p>" +
      '<p class="mota">' +
      mota +
      "</p>" +
      '<button class="hi" onclick="themsanpham(' +
      id +
      ", '" +
      ten.replace(/'/g, "\\'") +// replace nếu có dấu gì lạ sẽ cho biến
      "', " +
      gia +
      ')">Thêm vào giỏ hàng</button>' +
      '<button class="hi" onclick="xoasanpham(' +
      id +
      ', this)">Xóa</button>' +
      "</div>" +
      "</div>";
    document.querySelector(".container").innerHTML += html;
    var ds = JSON.parse(localStorage.getItem("dssp")) || [];
    ds.push({ id: id, ten: ten, gia: gia, img: imgSrc, mota: mota });
    localStorage.setItem("dssp", JSON.stringify(ds));
    markAddedProducts();
    anForm();
    document.getElementById("ten").value = "";
    document.getElementById("gia").value = "";
    document.getElementById("mota").value = "";
    document.getElementById("img").value = "";
  };
  reader.readAsDataURL(file);
}
function xoasanpham(id, btn) {
  var card = btn.closest(".sanpham"); // tìm card gần nhất chứa phần tử sản phẩm
  if (card) card.remove();

  var ds = JSON.parse(localStorage.getItem("dssp")) || [];
  ds = ds.filter(function (sp) { // giữ lại mảng của id khác id cần xoá
    return sp.id !== id;
  });
  localStorage.setItem("dssp", JSON.stringify(ds));
  arr = arr.filter(function (sp) {
    return sp[0] !== id; // sản phẩm thứ 0 biến
  });
  localStorage.setItem("cart", JSON.stringify(arr));
  x.innerText = arr.length;
  markAddedProducts();
}
function suasanpham(id , btn){
  
}
function luulai() {
  var ds = JSON.parse(localStorage.getItem("dssp")) || [];
  ds.forEach(function (sp) {
    var html =
      '<div class="sanpham">' +
      '<div class="hamnho">' +
      "<h2>" +
      sp.ten +
      "</h2>" +
      '<img src="' +
      sp.img +
      '">' +
      '<p class="gia">' +
      sp.gia +
      "</p>" +
      '<p class="mota">' +
      (sp.mota || "") +
      "</p>" +
      '<button class="hi" onclick="themsanpham(' +
      sp.id +
      ", '" +
      sp.ten.replace(/'/g, "\\'") +
      "', " +
      sp.gia +
      ')">Thêm vào giỏ hàng</button>' +
      '<button class="hi" onclick="xoasanpham(' +
      sp.id +
      ', this)">Xóa</button>' +
      "</div>" +
      "</div>";
    document.querySelector(".container").innerHTML += html;
  });
}
luulai();
markAddedProducts();
