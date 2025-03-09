// Localstore: Một cách lưu trữ dữ liệu trên trình duyệt phía người dùng, dữ liệu có dạng key-value, đặc
// điểm của localstore là dữ liệu sẽ không bị mất khi người dùng tắt trình duyệt
// Cách sử dụng:
// Lưu dữ liệu: localStorage.setItem('key', 'value');
// Lấy dữ liệu: localStorage.getItem('key');
// Cookie: Một cách lưu trữ dữ liệu trên trình duyệt phía người dùng, dữ liệu có dạng key-value, đặc
// điểm của cookie là dữ liệu sẽ bị mất khi người dùng tắt trình duyệt, và nó có thể được set thời gian
// Cách sử dụng:
// Lưu dữ liệu: document.cookie = 1;
// Lấy dữ liệu: document.cookie
// Section: Một cách lưu trữ dữ liệu trên trình duyệt phía người dùng, dữ liệu có dạng key-value, đặc
// điểm của section là dữ liệu sẽ bị mất khi người dùng tắt trình duyệt
// Cách sử dụng:
// Lưu dữ liệu: sessionStorage.setItem('key', 'value');
// Lấy dữ liệu: sessionStorage.getItem('key');
// localStorage.setItem("full_name", "Nguyễn Xuân Mạnh");
// localStorage.setItem("age", 22);
// document.cookie = "full_name=Nguyễn Xuân Mạnh;expires= 1000 * 60 * 60 * 12";
// document.cookie = "age=22;expires= 1000 * 60 * 60 * 12";
// set thoi gian het han cookie
// let date = new Date();
// cookie hen han sau 15 phut
// date.setTime(date.getTime() + 1000 * 60 * 15);
// date.setTime(date.getTime() + 1000 * 60 * 60 * 24);
// document.cookie = `full_name=Nguyễn Xuân Mạnh; expires=${date.toUTCString()}`;
// ddsalkdsakjdhsakjhfdskafbxzmncbzx213123maslkdnjsalkdas
// const data_cookie = document.cookie.split(";").map((item) => item.trim());

// const data = data_cookie.reduce((acc, item) => {
//   const [key, value] = item.split("=");
//   acc[key] = value;
//   return acc;
// }, {});

// const data_cookie = document.cookie.split(";");
// console.log(" document.cookie.split", data_cookie);
// console.log(" data_cookie[0].split", data_cookie[0].split("="));
// const h1 = document.querySelector("h1");
// const span = document.querySelector("span");
// h1.innerText = data_cookie[0].split("=")[1] ?? "Nguyen Van A";
// span.innerText = data_cookie[1].split("=")[1] ?? "-1";

// section

// const h1 = document.querySelector("h1");
// const span = document.querySelector("span");
// sessionStorage.setItem("full_name", "Nguyễn Xuân Mạnh");
// sessionStorage.setItem("age", 22);

// h1.innerText = sessionStorage.getItem("full_name") || "Nguyen Van A";
// span.innerText = sessionStorage.getItem("age") || "-1";

// const btnTang = document.querySelector(".tang");
// const btnGiam = document.querySelector(".giam");
// const input_quantity = document.querySelector(".quantity");
// const total = document.querySelector(".total");
// const price_product = document.querySelector(".price_product");

// btnTang.addEventListener("click", () => {
//   const price = Number(price_product.innerText);
//   input_quantity.value = Number(input_quantity.value) + 1;
//   total.innerText = price * Number(input_quantity.value);
// });

// btnGiam.addEventListener("click", () => {
//   const price = Number(price_product.innerText);
//   if (input_quantity.value <= 1) {
//     return;
//   }
//   input_quantity.value = Number(input_quantity.value) - 1;
//   total.innerText = price * Number(input_quantity.value);
// });

const addToCarts = document.querySelectorAll(".add-to-cart");

let data_cart = [];

addToCarts.forEach((item) => {
  item.addEventListener("click", (event) => {
    const father = event.target.parentElement;
    const img_src = father.querySelector(".img_product").src;
    const name_product = father.querySelector(".name_product").innerText;
    const price_product = Number(
      father.querySelector(".price_product").innerText
    );
    const product = {
      name_product: name_product,
      price_product: price_product,
      img_src: img_src,
      quantity: 1,
    };

    if (localStorage.getItem("data_cart") == null) {
      data_cart.push(product);
      localStorage.setItem("data_cart", JSON.stringify(data_cart));
      render();
    } else {
      const getLocalStore = JSON.parse(localStorage.getItem("data_cart"));
      const check = getLocalStore.find(
        (item) => item.name_product === product.name_product
      );
      if (check) {
        alert("san pham da co o trong gio hang");
        return;
      }
      data_cart.push(product);
      localStorage.setItem("data_cart", JSON.stringify(data_cart));
      render();
    }
  });
});

const render = () => {
  console.log("data_carrt", data_cart);

  const cart = document.querySelector(".cart");
  const data_cart_local = JSON.parse(localStorage.getItem("data_cart")) || [];
  if (data_cart_local.length === 0) {
    cart.innerHTML = `<h1>Khong co san pham nao trong gio hang</h1>`;
  } else {
    // xoa het cac phan tu trong cart

    // loai bo san pham trung
    const data_custom = data_cart_local.reduce((acc, item) => {
      const check = acc.find(
        (item2) => item2.name_product === item.name_product
      );
      if (check) {
        check.quantity += 1;
        return acc;
      }
      acc.push(item);
      return acc;
    }, []);

    cart.innerHTML = "";
    data_custom.forEach((item) => {
      const div = document.createElement("div");
      div.setAttribute("class", "cart__item");
      const total_quantity_price = item.price_product * item.quantity;
      div.innerHTML = ` <img class="cart__item__img"
                            src="${item.img_src}"
                            alt="">
                        <h3 class="cart__item__name_product">${item.name_product}</h3>
                        <p>Price: $<span class="cart__item__price">${item.price_product}</span></p>
                        <button class="cart__item__giam">-</button>
                        <input class="cart__item__quantity" type="text" value=${item.quantity} min="1">
                        <button class="cart__item__tang">+</button>
                        <p class="cart__item__total_product">${total_quantity_price} đ</p>
                        <button class="cart__item__remove">Remove</button>`;
      cart.appendChild(div);
    });

    const cart__item__tang = document.querySelectorAll(".cart__item__tang");
    const cart__item__giam = document.querySelectorAll(".cart__item__giam");
    const cart__item__remove = document.querySelectorAll(".cart__item__remove");
    const total_price_final = document.querySelector(".total_price_final");
    cart__item__tang.forEach((item) => {
      item.addEventListener("click", (event) => {
        const parent = event.target.parentElement;
        const name_product = parent.querySelector(
          ".cart__item__name_product"
        ).innerText;

        const data_cart_local =
          JSON.parse(localStorage.getItem("data_cart")) || [];
        const data_custom = data_cart_local.map((item) => {
          if (item.name_product === name_product) {
            item.quantity += 1;
          }
          return item;
        });
        localStorage.setItem("data_cart", JSON.stringify(data_custom));

        render();
      });
    });
    cart__item__giam.forEach((item) => {
      item.addEventListener("click", (event) => {
        const parent = event.target.parentElement;
        const name_product = parent.querySelector(
          ".cart__item__name_product"
        ).innerText;

        const data_cart_local =
          JSON.parse(localStorage.getItem("data_cart")) || [];
        const data_custom = data_cart_local.map((item) => {
          if (item.name_product === name_product) {
            if (item.quantity <= 1) {
              return item;
            }
            item.quantity -= 1;
          }
          return item;
        });
        localStorage.setItem("data_cart", JSON.stringify(data_custom));

        render();
      });
    });
    cart__item__remove.forEach((item) => {
      item.addEventListener("click", (event) => {
        const parent = event.target.parentElement;
        const name_product = parent.querySelector(
          ".cart__item__name_product"
        ).innerText;
        const data_cart_local =
          JSON.parse(localStorage.getItem("data_cart")) || [];

        data_cart = data_cart.filter(
          (item) => item.name_product !== name_product
        );
        const data_custom = data_cart_local.filter(
          (item) => item.name_product !== name_product
        );

        localStorage.setItem("data_cart", JSON.stringify(data_custom));
        render();
      });
    });

    const total_price = data_custom.reduce((acc, item) => {
      return acc + item.price_product * item.quantity;
    }, 0);
    total_price_final.innerText = `Tổng số tiền là: ${total_price} đ`;
  }
};
render();
