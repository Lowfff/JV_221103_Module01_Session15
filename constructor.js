// Cú pháp khai báo

function User (userName, email, passwword) {
    this.userName = userName;
    this.email = email;
    this.passwword = passwword;

}

User.prototype.className = "JV231103"

// Khởi tạo đối tượng User
const user1 = new User("Lâm đẹp zoai", "lam@gmail.com", "12345");
user1.readPost = "Đọc báo";
const user2 = new User("Nguyễn Văn A", "nva@gmail.com", "12345");
user2.manager = "Quản lý hệ thống";

console.log(user1.className);
console.log(user2);