// buổi 1
// Javascript: biến(let, var, const), kiểu dữ liệu ngầm định
// cấu trúc rẽ nhánh if else, toán tử 3 ngôi
// let number = 12;
// const result = number > 12 ? `number lon hon 12` : "number nho hon 12";
// console.log(result);

// == -> so sanh nong -> javascript 1 == '1'
// === -> so sanh nghiem ngat -> neu ma khac kieu du lieu -> no false nay

// if (1 === "1") {
//   console.log("true");
// } else {
//   console.log("false");
// }
// const response = {
//   status: "200",
//   message: "Get user done",
//   data: [],
// };

// if (response.status == 200) {
//   console.log("Lay ra duowjc response");
// } else {
//   console.log("Khong lay ra duoc response");
// }

// printf("Hello") -> Javascript; console.log("Hello")
// Javascrit là ngôn ngữ hướng thủ tục -> lập trình hàm
// console.log("Dat Hello world javascript");

// kiểu dữ liệu ngầm định, tức là em không phải khai báo nó tường minh
// float a = 1;

// var(function), let (block) tự suy ra kiểu dữ liệu khác nhau phạm vị truy cập
// const tự suy ra kiểu dữ liệu nhưng nó là biến hằng (tức là chỉ được khởi tạo giá trị 1 lần)

// {
//   {
//     {
//       {
//         {
//           let c = 12;
//           console.log(c);
//         }
//       }
//     }
//   }
// }

// const PI = 3.14;

// PI = 12;
// console.log(PI);
// var c;
// console.log(c);

// function hello() {
//   let c = 12;
// }

// console.log(c);

// kieu du lieu ten bien = gia tri
// let/var/const ten_bien = gia tri -> Javascript
// toan tu so hoc: +, -, *, /, %, ** (lũy thừa)
// toán tử logic: && (Và), ||(Hoặc), !(phủ định)
// toán tử so sánh: >=, <=, ==, !=... -> boolean
// ++a (tiền tố), a++ (hậu tố) tương tự với -
// ++a trả về giá trị sau tăng, a++ tăng lên 1 và trả về giá trị trước tăng
// 2^2 = 4, 2^3 = 2 * 2 * 2 = 8

// let a = 11;
// a++ -> 31
// ++a -> 32
// if (a >= 12) {
//   if (a < 30) {
//     if (a == 29) {
//       console.log("Sucsess");
//     }
//   } else {
//     console.log("Hello");
//   }
// } else if (a > 30 && a <= 90) {
//   console.log("NAm trong khoang 30 - 90");
// } else {
// }

// let c = 11;
// let kq = c > 12 ? true : false;
// console.log(kq);

// for, white, do-while, for-in, for of, mang
// for (int i = 1; i < 10; i++) {

// }

// const arr = [1, 2, 3, 4, 5];

// for (let dat of arr) {
//   console.log(dat);
// }

// let a = 11;
// do {
//   console.log("DUNG");
// } while (a < 10);

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
// }

// dat.truong_hoc = "DAI HOC CONG NGHE DONG A"

// // delete dat.truong_hoc

// console.log(dat);

// Ví dụ thực tế
// const students =
//     [
//         {
//             name: "Student 1",
//             age: 22,
//             address: "HA NOI"
//         },
//         {
//             name: "Student 2",
//             age: 32,
//             address: "PHU THO"
//         },
//         {
//             name: 'Student 3',
//             age: 42,
//             address: "PHUC THO"
//         }
//     ]

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

// const b1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const sum = b1.reduce(function (acc, value) {
//     return acc + value
// }, 0)

// const students = [
//     {
//         name: "Student 1",
//         age: 12,
//         address: "HA Noi",
//         gpa: 3.0
//     },
//     {
//         name: "Student 2",
//         age: 12,
//         address: "HA Noi",
//         gpa: 4.0
//     },
//     {
//         name: "Student 3",
//         age: 12,
//         address: "HA Noi",
//         gpa: 4.0
//     },
//     {
//         name: "Student 4",
//         age: 12,
//         address: "HA Noi",
//         gpa: 4.0
//     },
//     {
//         name: "Student 5",
//         age: 12,
//         address: "HA Noi",
//         gpa: 4.0
//     },
//     {
//         name: "Student 6",
//         age: 12,
//         address: "HA Noi",
//         gpa: 2.0
//     },
//     {
//         name: "Student 7",
//         age: 12,
//         address: "HA Noi",
//         gpa: 1.0
//     },
//     {
//         name: "Student 8",
//         age: 12,
//         address: "HA Noi",
//         gpa: 4.0
//     }, {
//         name: "Student 9",
//         age: 12,
//         address: "HA Noi",
//         gpa: 4.0
//     }
//     , {
//         name: "Student 10",
//         age: 12,
//         address: "HA Noi",
//         gpa: 2.0
//     }
// ]

// const newArr = students.filter(function (object) {
//     return object.gpa >= 3
// })

// const result = students.find(function (value) {
//     return value.gpa == 3.0 && value.address == "HA Noi"
// })

// console.log(result);

const arr2 = [1, 2, 3, 4, 5];

// console.log(arr2.slice(3, 5));

// console.log(arr2.join("-dat-"));

arr2.sort((a, b) => b - a);

console.log(typeof arr2);

// Cach phuoc thuc CRUD mang
// push -> thêm một hoặc nhiều phần tử vào cuối mảng
// pop -> Xóa phần từ ở cuối mảng và trả về giá trị vừa được xóa
// shift -> xóa phần tử đầu tiên của mảng và trả về chính nó, nếu không tồn tại thì trả về undefine
// unshift -> thêm một hoặc nhiều phần tử vào đầu mảng và trả về độ dài các phần tử trong mảng
// splice -> Xóa phần tử dựa vào chỉ số index. Giá trị đầu tiền là vị trí đứng, giá trị thứ hai là số phần tử sẽ xóa đứng sau nó
// slice -> Không làm thay đổi giá trị bản đầu của mảng, nó dùng để cắt dựa theo chỉ số index
// tìm phần tử có giá trị là 3 và xóa nó ra khỏi mảng
// join dùng để chuyển đổi mảng thành một chuỗi quy tắc được áp dụng ở chuổi đối số nhận vào
// typeof -> dung de kiem tra kieu du lieu
// reverse -> dùng để đảo ngược các phần tử trong mảng  [1, 2, 3, 4]
// sort -> dùng để sắp xếp tăng dần giảm dần dựa vào điều kiện nếu a - b -> tăng dần, b - a thì giảm dẩn
// const newArr = arr.filter(function value(value) {
//     return value != 3
// })

// const arr = [1, 2, 3, 4, 5, 6]

// const newArr = arr.splice(2, 1);
// console.log(arr);

// const arr = [1, 2, 3, 4, 5, 6]

// const newArr = arr.slice(0, 2)
// console.log(newArr);

// const arr = [1, 2, 3, 4, 5, 6]
// [1, 2, 3, 4, 5, 6]
// join default: 1,2,3,4,5,6
// 1-2-3-4-5-6

// const newString = arr.join('*')
// console.log(newString);

// // const arr = [4, 1, 2]
// students.sort(function (a, b) {
//     return b.gpa - a.gpa;
// })

// console.log(students);

// ES6 (2015)
// const, let, arrow fuc, sprerd (...), rest (...)
// function abc () {
//     console.log("ABC");
// }
// abc()

// const abc =  () => {
//     console.log("Hello dat");
// }

// abc()

// const arr = [1, 2, 3, 4]
// arr.forEach(value => {
//     console.log(value);
// })

// const result = arr.reduce((acc, value) => acc + value, 0)

// express fuc
// let abc = function (a, b) {
//     return a + b;
// }
// arrow fuc
// const arrow = (a, b) => {
//     return a + b;
// }
// decrisec fuc ES5 -
// function dec (a, b) {
//     return a + b;
// }
// khong co this
// abc()
// hosting
// const abc = () => {
//     console.log("Say hello.");
// }'

// const abc = arr.reduce((acc, value) => acc + value, 0)

// arr.forEach(value => {
//     console.log(value);
// })
// let arr = [1, 2, 3, 4, 5]// copy arr
// let newArr = [...arr]
// console.log(...arr);
// let cmt = {
//     id: 1,
//     iime: "001203031721"
// }

// let student = {
//     name: "Nguyen Xuan Manh",
//     age: 20,
//     ...cmt
// }

// // const newObject = {...object}
// console.log(student);

// rest
// function abc(a, b, ...rest) {
//   return a + b;
// }

// sprerd
// console.log(abc(1, 2, 3, 4, 5, 6, 7, 8));

// function tong (a, b, c) {
//     return a + b + c;
// }

// console.log(tong(1, 2, 3));
// function sum(a, b) {
//   // decrisfuc
// }

// const abc = function () {

// }

// const sum = (a, b) => {
//   a + b;
// };

// const total = sum(2, 3);

// console.log("Value: ", total);
// spred, rest

// const arr = [1, 2, 3, 4, 5, 6];
// console.log(...arr);

// let logger = (a, b, ...dat) => {
//   console.log("a: ", a);
//   console.log("b: ", b);

//   console.log(dat);
// };

// logger(1, 2, 3, 4, 5);

// teplate chuoi (ES6)

// const ten = "Dat";
// const tuoi = 20;
// const dia_chi = "PHU THO";

// console.log("Ho Ten: ", ten, "Tuoi: ", tuoi, "Dia Chi: ", dia_chi);
// console.log(`Họ tên: ${ten}; Tuổi: ${tuoi}; Địa chỉ: ${dia_chi}
//     ; Trường học: Đại Học Công Nghệ Đông Á`);

// sau này thì dữ liệu của em được lấy từ DB

// Optional chaining (?.)
// const data = null;

// console.log(data?.name);

// null, undefined, '', 0, NaN, false

// null mà dùng để truy xuất giá trị nào đó thì sẽ gây ra lỗi cras màn hình tráng

// [null, undefined, "", 0, NaN, false, -1, {}, []].forEach((value) => {
//   if (value) {
//     console.log("DUNG: ", value);
//   }
// });

// null list ?? ES6
// Nếu giá trị là null hoặc undefined thì trả về giá trị bên phải, nếu khác thì trả về giá trị bên trái
// const result = goi_server_lay_du_lieu ?? "Nguyen Xuan Manh";
// console.log(result);

// default value ES6 (func)
// function sum(a = 1, b = 1) {
//   return a + b;
// }

// console.log(sum(3, 3));

// for of, in dùng chủ yếu cho array
// const arr = [1, 2, 3, 4, 5];
// for of -> dùng để in từng giá trị của phần tử trong mảng ra
// for (gia_tri of arr) {
//   console.log(gia_tri);
// }

// const arr = [1, 2, 3, 4, 5];

// // for in -> dùng để in từng giá trị chỉ mục của mảng
// for (index in arr) {
//   console.log(index);
// }

// Thư viện toán học Math
// ceil, floor, random, round, max, min, sqrt, pi, pow, abs

// console.log(Math.PI); // 3.14
// console.log(Math.ceil(3.001)); // ceil là hàm làm tròn lên VD: 3.001 -> 4
// console.log(Math.floor(2.999999)); // floor là hàm làm tròn xuống VD: 2.99999 -> 2
// console.log(Math.round(3.0)); // Nếu giá trị 0 -> 0.49 -> làm tròn xuống. Còn từ 0.5 -> 1 thì làm trong lên
// console.log(Math.max(...[1, 2, 3, 4, 5, 6, 99]));
// console.log(Math.min(...[1, 2, 3, 4, 5, 6, 99]));
// console.log(Math.sqrt(2)); // hàm căn bậc 2
// console.log(Math.pow(3, 4)); //  hàm số mũ VD: 3^4 = 81
// console.log(Math.abs(-21)); // Hàm giá trị tuyệt đối
// console.log(Math.random()); // 0 -> 1;

// for (let i = 0; i <= 10; i++) {
//   let isRandom = Math.round(Math.random() * 100);
//   if (isRandom <= 50) {
//     console.log("Nang Cap Do Thanh Cong");
//   } else {
//     console.log("Nang Cap Do That bai");
//   }
// }

// DOM dùng để thực hiện/tương tác với các giao diện đã được đánh dấu
// Cách lấy các element từ DOM
// id, class // HTMLCollection
// const elementHeaderClass = document.getElementsByClassName("header");
// const elementHeaderId = document.getElementById("header");
// tag => tem the // HTMLCollection
// const elementHeaderTag = document.getElementsByTagName("header");

// Cách 2 dùng querySelector, querySelectorAll // NoteList
// const selectorElementsByClass = document.querySelectorAll(".header");
// const selectorElementById = document.querySelector("#header");
// const selectorElementByTagName = document.querySelector("header");

// Xử lý/Lắng nghe sự kiện, click, change, dbCick...
// addEventListener dùng để lắng nghe các sự kiện

// selectorElementById.addEventListener("click", () => {
//   alert("Hello wolrd");
// });

// selectorElementById.ondblclick = () => {
//   alert("Hello wolrd");
// };

// const elementDesc = document.querySelector(".categories__item__left__desc");
// mặc định dùng css inline, thêm thuộc tính vào thẻ mình lấy được
// elementDesc.setAttribute("style", "color: #ccc");
// elementDesc.setAttribute("title", "Hello abcdef");
// Ưu điểm là dễ dàng, có thể thêm các thuộc tính không tồn tại trong element vào
// Nhược điểm là không cho nhiều thuộc tính vào cùng một lúc được

// elementDesc.style.color = "red";
// elementDesc.style.fontSize = "50px";

// DOM Tạo element, tìm element, dùng note char

// const arr = [1, 2, 3, 4, 5];
// for (let index in arr) {
//   console.log(index);
// }

// for (let value of arr) {
//   console.log(value);
// }

// event của element khi xử lý xự kiện
// const element = document.querySelector(".nav-list__context");
// get noi dung qua element
// console.log(element.textContent); // noi dung content
// console.log(element.innerHTML); // lay tat ca ca element con ra

// get noi dung voi su kien

// element.onclick = (event) => {

// }

// const event = {
//   baseURL: "http://google.com",
//   target: {
//     baseURI: "localhost:5500/index.html#",
//   },
// };

// console.log(event.target.baseURI);

// sự kiện event thường dùng để lấy các giá trị của element đó như tọa độ, nội dung, tên class...
// element.addEventListener("click", (event) => {
//   if (event.target.className === "nav-list__context") {
//     alert("OK");
//   } else {
//     alert("NOT OK");
//   }
// });
// các thuộc tính như tọa độ, kích thước, kiểu quên thì log event ra
// một số thuộc tính cần nhớ là: target(chính element đó)

// classList dùng để em tương tác với class của element
// nó cung cấp sẵn các phương thức/hàm sẵn như add, remove, replace, contains
// DOMTokenList la object xu ly class
// element.classList.add("dat_phu_tho");
// element.classList.add("manh_ba_vi");

// DOM create Element
// textContent: Là nội dung của element khi gán bằng thì là gán nội dung, khi lấy lên thì sẽ dữ nguyên
// khoảng cách giữa các element
// còn khi chấm tới không .textContent thì là đọc nội dung
// createElement: Khởi tạo một element
// innerHTML: Là các thẻ html nằm trong thằng cha nếu . tới. Còn gắn bằng thì là gán nội dung
// html được thêm vào.
// innerText: Lấy nội dụng của các element nếu là . tới. Còn nếu gắn bằng thì là gán nội dụng text
// vào element
// append: Là thêm nội dung vào bên trong element cha
// getAttribute: Lấy các giá trị của thuộc tính trong element nếu không có thì sẽ trả về null

// const body = document.querySelector("body");
// const div = document.createElement("div");
// div.setAttribute("class", "abc");

// const h1 = document.createElement("h1");
// const h2 = document.createElement("h2");
// h1.textContent = "Dat 09";
// h2.textContent = "Manh 09";
// div.append(h1, h2);

// div.innerHTML = `<h1>Đạt 09</h1>
//   <h2>Mạnh 09</h2>
// `;
// body.append(div);

// console.log(document.querySelector(".abc")?.innerHTML);

// const box = document.getElementsByClassName("box");

// div.innerText =
//   "                             DH CONG NGHE                              ";
// const body = document.querySelector("body");
// body.setAttribute("style", "color: white; backgroud: red;");
// const header = body.querySelector("header");
// Cách này nó gọi là nhảy từ node con lên cha
// console.log(header.querySelector("main"));
// parentNode, parentElement lấy thằng cha của element hiện tại
// console.log(header);
