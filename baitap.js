function User(userId, userName, email, password, createdAt) {
  this.userId = userId;
  this.userName = userName;
  this.email = email;
  this.password = password;
  this.createdAt = createdAt;
}

const users = [];

const formatDate = new Intl.DateTimeFormat("en", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour12: false,
});

users.push(
  new User(
    1,
    "Lam",
    "nhl@gmail.com",
    "12345",
    formatDate.format(new Date("4/12/2023"))
  )
);
users.push(
  new User(
    2,
    "NVA",
    "nva@gmail.com",
    "12345",
    formatDate.format(new Date("4/12/2023"))
  )
);
users.push(
  new User(
    3,
    "NVB",
    "nvb@gmail.com",
    "12345",
    formatDate.format(new Date("4/12/2023"))
  )
);
users.push(
  new User(
    4,
    "NVC",
    "nvc@gmail.com",
    "12345",
    formatDate.format(new Date("4/12/2023"))
  )
);

// ========================================================================================= //

function Product(productId, productName, image, price, description, createdAt) {
  this.productId = productId;
  this.productName = productName;
  this.image = image;
  this.price = price;
  this.description = description;
  this.createdAt = createdAt;
}

const products = [];

products.push(
  new Product(
    1,
    "Áo",
    "http://image",
    1000,
    "Áo cộc",
    formatDate.format(new Date("4/12/2023"))
  )
);
products.push(
  new Product(
    2,
    "Quần",
    "http://image",
    1200,
    "Quần đùi",
    formatDate.format(new Date("4/12/2023"))
  )
);
products.push(
  new Product(
    3,
    "Mũ",
    "http://image",
    500,
    "Mũ len",
    formatDate.format(new Date("4/12/2023"))
  )
);
products.push(
  new Product(
    4,
    "Túi Xách",
    "http://image",
    2000,
    "Túi nam",
    formatDate.format(new Date("4/12/2023"))
  )
);

// ============================================================== //

const carts = [];

function Cart(cartId, userId, productId, quantity) {
  this.cartId = cartId;
  this.userId = userId;
  this.productId = productId;
  this.quantity = quantity;
}

const cartUser1 = [];
const cartUser2 = [];
const cartUser3 = [];
const cartUser4 = [];

cartUser1.push(new Cart(1, 1, 2, 1));
cartUser1.push(new Cart(2, 1, 1, 2));

cartUser2.push(new Cart(1, 2, 4, 1));

cartUser3.push(new Cart(1, 3, 3, 3));

// Tính toán //

function totalMoney(carts) {
  let total = 0;
  for (let i = 0; i < carts.length; i++);
  {
    const infoProduct = products.find(
      (Product) => Product.productId == carts[i].productId
    );
    total += carts[i].quantity * infoProduct.price;
  }
  return total;
}

console.log(totalMoney(cartUser1));
console.log(totalMoney(cartUser2));
console.log(totalMoney(cartUser3));

// const users = [];

// const products = [];

// const carts = [];

// let choose;

// do {
//     choose = +prompt("Mời bạn nhập lựa chọn: ");

//     switch (choose) {
//         case 1:
//             const userId = prompt("Nhập id: ")
//             const userName = prompt("Nhập tên user: ")
//             const email = prompt("Nhập email:");
//             const password = prompt("Nhập mật khẩu:");

//             const user = {
//                 userId: userId,
//                 userName: userName,
//                 email: email,
//                 password: password,
//                 createdAt: new Date().toISOString().split("T")[0],
//             };
//             users.push(user);
//             break;
//         case 2:
//             const productId = +prompt("Nhập id sản phẩm:");
//             const productName = prompt("Nhập tên sản phẩm: ");

//             break;
//         default:
//             break;
//     }
// }
