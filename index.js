// Tạo đối tượng trọng js
// tu_khoa ten_doi_tuong = {
    // Các key và value
// }

const user = {
    // key: value => property (thuộc tính)
    name: "Nguyên văn A",
    email: "nva@gmail.com",
    passwword: "123456",
    age: 21,
    isMale: true,

    // Phương thức(method)
    getEmail: function() {
        return this.email
    },

    getName: function() {
        return this.name
    },
};

// Cách xoá key và value trong object
delete user.isMale;

// Thêm key và value vào đối tượng
user.address="Hà Nội";
user.dateOfBirth = "1/1/1111";
console.log("getEmail: ", user.getEmail());

// Cách 1: truy xuất các phần tử trong object
console.log(user.name);
console.log(user.email);

// Cách 2:
console.log(user['isMale']);
console.log(user['age']);

// Lặp qua các thuộc tính của đối tượng
for( let key in user) {
    console.log("key: ", key);
    console.log("Value: ", user[key]);
}

// Tạo một mảng lưu trữ 3 đối tượng product
const products = [
    {
        productsId: 1,
        productsName: "Áo thun nam",
        productsPrice: 200000,
        image: "",
        description: "",
    },
    {
        productsId: 2,
        productsName: "Áo thun nam",
        productsPrice: 200000,
        image: "",
        description: "",
    },
]