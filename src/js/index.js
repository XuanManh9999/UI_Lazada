// buổi 1
// Javascript: biến(let, var, const), kiểu dữ liệu ngầm định
// cấu trúc rẽ nhánh if else, toán tử 3 ngôi

// printf("Hello") -> Javascript; console.log("Hello")
// Javascrit là ngôn ngữ hướng thủ tục -> lập trình hàm
// console.log("Dat Hello world javascript");

// kiểu dữ liệu ngầm định, tức là em không phải khai báo nó tường minh
// float a = 1;

// var(function), let (block) tự suy ra kiểu dữ liệu khác nhau phạm vị truy cập
// const tự suy ra kiểu dữ liệu nhưng nó là biến hằng (tức là chỉ được khởi tạo giá trị 1 lần)

// kieu du lieu ten bien = gia tri
// let/var/const ten_bien = gia tri -> Javascript
// toan tu so hoc: +, -, *, /, %, ** (lũy thừa)
// toán tử logic: && (Và), ||(Hoặc), !(phủ định)
// toán tử so sánh: >=, <=, ==, !=... -> boolean
// ++a (tiền tố), a++ (hậu tố) tương tự với -
// ++a trả về giá trị sau tăng, a++ tăng lên 1 và trả về giá trị trước tăng
// 2^2 = 4, 2^3 = 2 * 2 * 2 = 8

// let a = 31;
// if (a >= 12) {
//   if (a < 30) {
//     if (a == 29) {
//       console.log("Sucsess");
//     }
//   } else {
//     console.log("Hello");
//   }
// } else if (a > 30 && a <= 90) console.log("NAm trong khoang 30 - 90");

// let c = 11;
// let kq = c > 12 ? true : false;
// console.log(kq);

// for, white, do-while, for-in, for of, mang
// for (int i = 1; i < 10; i++) {

// }

// for (let i = 1; i <= 10; i = i + 1) {
//   console.log(i);
// }
// console.log("///");

// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }

// let a = 3;
// do {
//   console.log("ANh manh");
//   a--;
// } while (a >= 2);

// let a = 1;
// while (a <= 10) {
//   console.log(a);
//   a++;
// }

// bang cuu chuong
// for (let i = 2; i <= 10; i++) {
//   console.log("Bang ", i);

//   for (let j = 1; j <= 10; j++) {
//     console.log(i, "*", j, "=", i * j);
//   }
// }

// Mảng, Object -> Một số phương thức của Mảng và Object, một số vòng lặp của mảng
// Front-end:  REACTJS, VUE
// Back-end: Express js -> Nest JS -> Nextjs

// chỉ mục -> xuất phát từ 0
// console.log(arr1);
// console.log(arr2);
//  Cách lấy ra phần tử trong mảng là: name_arr[chỉ muc]
// Các phương thức của mảng: 
// +, forEach(): dùng để lặp qua các phần tử trong mảng
// +, filter(): dùng để lọc giá trị theo điều kiện nhất định (trả về một mảng mới)
// +, find(): dùng để tìm kiếm giá trị trong mảng thỏa mãn, nếu tìm thấy thì nó trả về phần tử đó, nếu không thì undefine
// +, some(): trả về true nếu có 1 phần tử trong mảng thỏa mãn điều kiện
// +, evely(): trả về true nếu tất cả các phần tử trong mảng thỏa mãn điều kiện
// +, map(): dùng để custom lại một arr. Trả về một arr mới
// +, reduce(): Trả về một giá trị sau khi xử lý logic
// +, indexOf(): trả về vị trí index của phần tử nếu có, nếu không có thì trả về -1
// +, includes(): trả về true nếu tìm thấy phần tử đó trong mảng, false nếu không tìm thấy
// +, findIndex(): trả về chỉ mục của phần tử nếu thỏa mãn


// for (let i = 0; i < arr1.length; i++) {
//     console.log(arr1[i]);
// }
// callback

// arr1.forEach(function (value, index, arr) {
//    console.log(arr);
// })
// let sum = 0;
// arr1.forEach(function (value) {
//     if (value % 2 == 0) {
//         console.log(value);
//     }
// })

// console.log(sum);


// const arr1 = [1, 2, 3, 4, 5]

// const new_arr = arr1.filter(function (value) {
//     return value % 2 == 0; // dieu kien filter []
// })

// console.log(new_arr);

// const arr1 = [1, 2, 3, 4, 5]

// const result = arr1.find(function (value) {
//     return value == 6; // dieu kien find tìm thấy trả về giá trị, không thấy thì trả về undefine
// })

// console.log(result);

// const arr1 = [1, 2, 3, 4, 5, 11]

// const isSome = arr1.some(function (value) {
//     return value >= 6 || value <= 10
// })

// if (isSome) {
//     console.log("Mang co phan tu >= 6");
// } else {
//     console.log("Mang khong co phan tu >= 6");

// }


// const arr1 = [2, 4]

// const isEvery = arr1.every(function (value) {
//     return value % 2 == 0;
// })

// if (isEvery) {
//     console.log("Tat ca cac phan tu trong mang la so chan");
// } else {
//     console.log("Cac phan tu trong mang khong phai la so chan");
// }

// Yêu cầu tăng giá trị lên 1
// const arr = [1, 2, 3, 4, 5]

// const new_arr = arr.map(function (value) {
//     return value * 2;
// })
// console.log(arr);

// console.log(new_arr);

// const arr = [1, 2, 3, 4, 5]

// const result = arr.reduce(function (acc, value, index) {
//     console.log("Lan ", index, "acc: ", acc);
//     return acc + value;
// }, 0)

// console.log(result);

// const arr = [1, 2, 3, 4, 5]

// console.log(arr.indexOf(2, 1));
// const arr = [1, 2, 3, 4, 5]

// const result = arr.includes(2, 2)
// console.log(result);

// const arr = [1, 2, 3, 4, 5]

// const result = arr.findIndex(function (value, index, arr) {
//     return value == 6
// })
// console.log(result);


// // object -> đối tượng {}
// const persion = {}
// key, value
// để truy xuất được giá trị của object 
// object.key -> lấy ra được value
// ten
// ngay sinh 
// dia chi

// const ten = "DAT"
// const dia_chi = "PHU THO"
// const ngay_sinh = "31/05/2006"


// const dat = {
//     ten: "DAT",
//     dia_chi: "PHU THO",
//     ngay_sinh: "31/05/2006",
//     ngay_sinh: "31/05/2005"
//     // truong_hoc: "DAI HOC CONG NGHE DONG A"
// }
// dat.truong_hoc = "DAI HOC CONG NGHE DONG A"

// // delete dat.truong_hoc

// console.log(dat);



// Ví dụ thực tế
const students =
    [
        {
            name: "Student 1",
            age: 22,
            address: "HA NOI"
        },
        {
            name: "Student 2",
            age: 32,
            address: "PHU THO"
        },
        {
            name: 'Student 3',
            age: 42,
            address: "PHUC THO"
        }
    ]


// const result = students.filter(function (object, index) {
//     return object.age <= 40 && object.address == 'HA NOI'
// })

// console.log(result);

// cach dung foreach
// students.forEach(function (object, index) {
//     console.log(object.name, object.age, object.address);
// })
// console.log(students);


// cach dung truyen thong for

// for (let i = 0; i < students.length; i++) {
//     console.log(students[i].name, students[i].age, students[i].address);
// }

// const result = students.find(function (value) {
//     return value.age == 22
// })

// console.log(result);


// Cho mảng số nguyên từ 1 -> 10 -> thực hiện tính tổng. Không dùng for
// Tạo 10 đối tượng sinh viên nằm trong một mảng. Đối tượng có các trường (name, age, address, gpa) và in ra màn hình
// lấy ra tất cả sinh viên có gpa >= 3.0
// Tìm sinh viên có GPA 3.0 ở hà nội


// GITHUB 
// Lưu máy mình (local) -> workspace, lưu trên github(repository)



// ES6  -> DOM




