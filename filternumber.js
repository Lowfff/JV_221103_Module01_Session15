const array = [1, 2, 3, 4, 5, 6, 7, 8];
// Lọc ra những phần tử thoả mãn/ ko thoả mãn điều kiện
// Sẽ trả về 1 mảng mới chứa các giá trị thoả mãn điều kiện, nếu không có điều kiện nào thoả mãn thì sẽ trả mảng rỗng
// Hay ứng dụng trong trường hợp muốn xoá 1 phần tử khỏi mảng

// const filterNumber = array.filter((item, index) => {
//   console.log(`item: ${item} , index: ${index}`);
//   return item !== 1;
// });

// const filterNumber = array.filter((arr) => arr !== 1); // Kết quả: [2, 3, 4, 5, 6, 7, 8]
const filterNumber = array.filter((arr) => arr > 5); // Kết quả: [6, 7, 8]
console.log(filterNumber);

// Tìm kiếm một phần tử trong mảng theo một điều kiện cụ thể => hàm find()
// Hay ứng dụng để tìm kiếm một phàn tử duy nhất trong mảng
// Nó sẽ trả về một phần tử có trong mảng mà thoả mãn điều kiện, nếu ko có điều kiện nào thoả mãn thì trả về undefind

// const findNumber = array.find((arr) => arr === 2); // Két quả: 2
const findNumber = array.find((arr) => arr === 9); // Két quả: undefind
console.log(findNumber);

// Lấy ra vị trí một phần tử trong mảng nếu thoả mãn điều kiện
// Hay ứng dụng trong trường hợp tìm kiếm vị trí của một phần tử trong mảng
// Nó trả về vị trí của phần tử trong mảng nếu thoả mãn điều kiện, trả về -1 nếu không thoả mãn điều kiện

const findIndex = array.findIndex((arr) => arr == 10); // Kết quả:3
console.log(findIndex);

// Hàm làm thay đổi tất cả giá trị, phần tử tron mảng => fill()
const fillArray = array.fill(0, 1, 5); // 0: vị trí đầu tiên, 1: số lần thay đổi, 5 số kết thúc
console.log(fillArray);

// Kiểm tra xemm là tất cả các phần tử có thoả mãn điều kiện không
// Chỉ cần có 1 đk sai thì sẽ trả về false, tương đương như toán tử &&
const checkAllCondition = array.every((arr) => arr >= 1);
console.log(checkAllCondition);

// Kiểm tra chỉ cần một điều kiện thoả mãn thì mảng sẽ nhận giá trị là true
const checkSomeCondition = array.some((arr) => arr >= 8);
console.log(checkSomeCondition);
