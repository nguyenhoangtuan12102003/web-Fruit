
const table = document.getElementsByClassName('table');
const tong_tien = document.getElementById('tongtien');
const so_luong = document.getElementById('soluong');
const order = document.getElementById('order');


// fake so lieu
const currentuser = JSON.parse(localStorage.getItem("currentuser")) || "";
const hoadon = JSON.parse(localStorage.getItem("hoadon")) || [];
const cart = JSON.parse(localStorage.getItem("currentcart")) || [];
const chitiethoadon = JSON.parse(localStorage.getItem("chitiethoadon")) || [];
const sanpham = JSON.parse(localStorage.getItem("products")) || [
  {
    id: 1,
    name: "Chôm Chôm",
    price: 5000,
    quantity: 10,
    img: "./image/product-fresh/chom-chom.jpg",
    categoryName: "fresh-fruit",
  },
  {
    id: 2,
    name: "Dưa Hấu",
    price: 8000,
    quantity: 15,
    img: "./image/product-fresh/dua-hau.jpg",
    categoryName: "fresh-fruit",
  },
  {
    id: 3,
    name: "Dưa Lưới",
    price: 7000,
    quantity: 12,
    img: "./image/product-fresh/dua-luoi.jpg",
    categoryName: "fresh-fruit",
  },
  {
    id: 4,
    name: "Hồng Giòn",
    price: 6000,
    quantity: 20,
    img: "./image/product-fresh/hong-gion.jpg",
    categoryName: "fresh-fruit",
  },
  {
    id: 5,
    name: "Hồng Trung",
    price: 7500,
    quantity: 8,
    img: "./image/product-fresh/Hong-Trung.jpg",
    categoryName: "fresh-fruit",
  },
  {
    id: 6,
    name: "Măng Cụt",
    price: 10000,
    quantity: 18,
    img: "./image/product-fresh/mang-cut.jpg",
    categoryName: "fresh-fruit",
  },
  {
    id: 7,
    name: "Nhãn Xuồng",
    price: 9000,
    quantity: 14,
    img: "./image/product-fresh/Nhan-Xuong.jpg",
    categoryName: "fresh-fruit",
  },
  {
    id: 8,
    name: "Sầu Riêng",
    price: 11000,
    quantity: 22,
    img: "./image/product-fresh/Sau-Rieng.jpg",
    categoryName: "fresh-fruit",
  },
  {
    id: 9,
    name: "Vú Sữa",
    price: 12000,
    quantity: 7,
    img: "./image/product-fresh/vu-sua.jpg",
    categoryName: "fresh-fruit",
  },
  {
    id: 10,
    name: "Cam Xoàn",
    price: 12000,
    quantity: 7,
    img: "./image/product-fresh/Cam-Xoan.jpg",
    categoryName: "fresh-fruit",
  },
  {
    id: 11,
    name: "Cam Ai Cập",
    price: 6500,
    quantity: 25,
    img: "./image/product-import/cam-ai-cap.jpg",
    categoryName: "imported-fruit",
  },
  {
    id: 12,
    name: "Cam Úc",
    price: 8500,
    quantity: 12,
    img: "./image/product-import/cam-uc.jpg",
    categoryName: "imported-fruit",
  },
  {
    id: 13,
    name: "Cherry Đỏ Mỹ",
    price: 3000,
    quantity: 30,
    img: "./image/product-import/cherry-do-my.jpg",
    categoryName: "imported-fruit",
  },
  {
    id: 14,
    name: "Dâu Tây",
    price: 9000,
    quantity: 17,
    img: "./image/product-import/dau-tay.jpg",
    categoryName: "imported-fruit",
  },
  {
    id: 15,
    name: "Lê Nam Phi",
    price: 4000,
    quantity: 40,
    img: "./image/product-import/le-nam-phi.jpg",
    categoryName: "imported-fruit",
  },
  {
    id: 16,
    name: "Lựu Thái",
    price: 6000,
    quantity: 14,
    img: "./image/product-import/luu-thai.jpg",
    categoryName: "imported-fruit",
  },
  {
    id: 17,
    name: "Nho Đỏ Úc",
    price: 11000,
    quantity: 8,
    img: "./image/product-import/nho-do-khong-hat-uc.jpg",
    categoryName: "imported-fruit",
  },
  {
    id: 18,
    name: "Nho Mẫu Đơn",
    price: 7500,
    quantity: 13,
    img: "./image/product-import/nho-mau-don-dai-loan.jpg",
    categoryName: "imported-fruit",
  },
  {
    id: 19,
    name: "Táo Neazealand",
    price: 13000,
    quantity: 9,
    img: "./image/product-import/tao-do-neazealand.jpg",
    categoryName: "imported-fruit",
  },
  {
    id: 20,
    name: "Viết Quất",
    price: 9500,
    quantity: 16,
    img: "./image/product-import/viet-quat.jpg",
    categoryName: "imported-fruit",
  },
  {
    id: 21,
    name: "Giỏ Trái Cây Thăm Tặng",
    price: 12000,
    quantity: 14,
    img: "./image/product-cart/CT01-CTT-500k.jpg",
    categoryName: "box-fruit",
  },
  {
    id: 22,
    name: "Giỏ Trái Cây Gia Đình",
    price: 9000,
    quantity: 20,
    img: "./image/product-cart/gio-trai-cay-579.jpg",
    categoryName: "box-fruit",
  },
  {
    id: 23,
    name: "Giỏ Quà Trái Cây",
    price: 8500,
    quantity: 11,
    img: "./image/product-cart/gio-trai-cay-citi-fruit.jpg",
    categoryName: "box-fruit",
  },
  {
    id: 24,
    name: "Hộp Trái Cây-Nho",
    price: 15000,
    quantity: 20,
    img: "./image/product-cart/hop-trai-cay-qua-tang-nho-xanh.jpg",
    categoryName: "box-fruit",
  },
  {
    id: 25,
    name: "Hộp Trái Cây Quà Tặng",
    price: 12000,
    quantity: 15,
    img: "./image/product-cart/hop-trai-cay-qua-tang.jpg",
    categoryName: "box-fruit",
  },
  {
    id: 26,
    name: "Hộp Nho Không Hạt",
    price: 18000,
    quantity: 12,
    img: "./image/product-cart/hop-trai-cay-qua-tang-nho-xanh-khong-hat.jpg",
    categoryName: "box-fruit",
  },
  {
    id: 27,
    name: "Hộp Trái Cây",
    price: 16000,
    quantity: 18,
    img: "./image/product-cart/hop-trai-cay-qua-tang-hc03.jpg",
    categoryName: "box-fruit",
  },
  {
    id: 28,
    name: "Giỏ Quà Thăm Tặng",
    price: 13000,
    quantity: 25,
    img: "./image/product-cart/qua-tang.jpg",
    categoryName: "box-fruit",
  },
  {
    id: 29,
    name: "Giỏ Quà Đơn Giản",
    price: 14000,
    quantity: 14,
    img: "./image/product-cart/thiet-ke.png",
    categoryName: "box-fruit",
  },
  {
    id: 30,
    name: "Giỏ Quà Sinh Nhật",
    price: 14000,
    quantity: 14,
    img: "./image/product-cart/sinh-nhat.jpg",
    categoryName: "box-fruit",
  },
  {
    id: 31,
    name: "Chôm",
    price: 5000,
    quantity: 10,
    img: "./image/product-fresh/chom-chom.jpg",
    categoryName: "fresh-fruit",
  },
];
// thay doi so luong vat pham

function reloadCard() {
  let count = 0;
  let totalPrice = 0;
  table[0].innerHTML = "";
  let tr = document.createElement("tr");
  tr.innerHTML = ` <th style="width: 30%;">Hình ảnh</th>
 <th style="width: 20%;">Tên sản phẩm</th>
 <th style="width: 20%;">Giá</th>
 <th style="width: 30%;">Số lượng</th>`;
  table[0].appendChild(tr);
  cart.forEach((value, key) => {
    count += value.soluong;
    totalPrice += value.gia * value.soluong;

    let product = sanpham.find((x) => x.id == value.masanpham);
    let tr = document.createElement("tr");

    tr.innerHTML = `
                <td><img src="${product.img}"/></td>
                <td>${product.name}</td>
                <td>${product.price.toLocaleString()}</td>
                <td>               <div class="item">
                <button onclick="changeQuantity(${key}, ${
      value.soluong - 1
    })">-</button>
                <div class="count">${value.soluong}</div>
                <button onclick="changeQuantity(${key}, ${
      value.soluong + 1
    },)">+</button>
                <button onclick="deleteProduct(${key})">Xóa</button>
                </div> </td>`;

    table[0].appendChild(tr);
  });

  tong_tien.innerHTML = `${totalPrice.toLocaleString()}đ`;
  so_luong.innerHTML = `${count.toLocaleString()}`;
}
reloadCard();
function changeQuantity(key, quantity) {
  if (quantity == 0) {
    cart.splice(key, 1);
  } else {
    cart[key].soluong = quantity;
  }
  localStorage.setItem("currentcart", JSON.stringify(cart));
  reloadCard();
}
let deleteProduct = (key) => {
  cart.splice(key, 1);

  localStorage.setItem("currentcart", JSON.stringify(cart));
  reloadCard();
};
// order
order.addEventListener("click", () => {
  if (currentuser) {
    console.log(currentuser.role)
    // Kiểm tra nếu là admin thì không cho mua hàng
    if (currentuser.role === "admin") {
      alert("Tài khoản admin không thể mua hàng.");
      return;
    }
    const cart = JSON.parse(localStorage.getItem("currentcart")) || [];
    if (cart.length == 0) {
      alert("Chọn ít nhất 1 sản phẩm");
      return;
    }
    let today = new Date().toISOString().slice(0, 10);
    let mahoadon = hoadon.length + 1;
    let tong_tien = 0;
    cart.map((x) => {
      tong_tien += x.soluong * x.gia;
    });
    hoadon.push({
      makhach: currentuser.user_id,
      mahoadon: mahoadon,
      ngaymua: today,
      trangthaihoadon: "Chờ xử lý",
      tongtien: tong_tien,
      username: currentuser.username,
    });

    cart.map((x) => {
      x["mahoadon"] = mahoadon;
      chitiethoadon.push(x);
    });
    localStorage.setItem("hoadon", JSON.stringify(hoadon));
    localStorage.setItem("chitiethoadon", JSON.stringify(chitiethoadon));
    localStorage.removeItem("currentcart");

    alert("Đặt hàng thành công đơn hàng chờ xử lý");
    window.location.href = "../index.html";
  } else {
    alert("Đăng nhập trước khi mua");
    window.location.href = "../block/login.html";
  }
});
