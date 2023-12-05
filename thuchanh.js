// Viết chương trình yêu cầu người dùng nhập các lựa chọn
// 1. Nhập thông tin user: name, email, password và lưu vào trong mảng
// 2. In ra thông tin mảng người dùng ra bên ngoài
// 3. Nhập tên người dùng từ trình duyệt và tìm kiếm tên người đó có trong mảng kô
// 4. Thoát trương trình
// Các trường hợp còn lại thông báo là nhập sai lựa chọn

let choose;
const users = [];

const addUser = () => {
  const userName = prompt("Mời bạn nhập tên: ");
  const email = prompt("Mời bạn nhập email: ");
  const password = prompt("Mời bạn nhập password: ");

  // Khai báo đối tượng user
  const user = {
    userName: userName,
    email: email,
    password: password,
  };

  users.push(user);
};

/**
 * Hàm tìm kiếm user theo tên
 * @param {*} array Mảng user
 */
const readUser = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log("Danh sách user: ", array[i]);
  }
};

/**
 * Hàm tìm user theo tên
 * @param {*} inputValue Tên lấy từ người dùng
 * @param {*} array Mảng chứa danh sách user
 * @returns Trả về index nếu như tìm thấy user, -1 nếu không tìm thấy
 */
const handleSearch = (inputValue, array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].userName == inputValue) {
      return i; //Trả về giá trị tìm thấy
    } else {
      return -1; // Nếu không tìm thấy
    }
  }
};
do {
  choose = +prompt("Mời bạn nhập lựa chọn: ");
  switch (choose) {
    case 1:
      // Gọi hàm addUser
      addUser();
      break;
    case 2:
      // Gọi hàm readUser
      readUser(users);
      break;
    case 3:
      const nameSearch = prompt("Mời bạn nhập tên:");
      // Lữu trữ giá trị trả về từ hàm handleSearch
      const result = handleSearch(nameSearch, users);
      if (result !== -1) {
        console.log(`${nameSearch} xuất hiện tại vị trí thứ ${result}`);
      } else {
        console.log(`Không tìm thấy tên ${nameSearch}`);
      }
    // for(let i = 0; i < users.length; i++) {
    //     if (user[i].userName === nameSearch){
    //         console.log("Vị trí xuất hiện: ", i);
    //     } else {
    //         console.log("Không tìm thấy tên");
    //     }

    // }
    // break;
    case 4:
      console.log("Thoát chương trình: ");
      break;

    default:
      console.log("Nhập sai lựa chọn:");
      break;
  }
} while (choose != 4);

let a = 10;
let b = a;
b = 20;
console.log(a);
console.log(b);
