// Bước 1: Lấy thẻ(h1) đó từ DOM
// Bước 2: Sau khi lấy thì xử lý logic
// document.querySelector('.nav-list__login') Lấy element từ DOM
// addEventListener() -> Lắng nghe các sự kiện(click, dbclick, hover, onchange...) từ DOM
const btnLogin = document.querySelector('.nav-list__login')

const btnClone = document.querySelector('.modal__container__icon-close')

const icon_eye = document.querySelector('.modal__container__content__fierd > i');

btnLogin.addEventListener('click', function () {
    document.querySelector('.modal').style.display = 'flex'
})

btnClone.addEventListener('click', function () {
    document.querySelector('.modal').style.display = 'none'
})


icon_eye.addEventListener('click', function () {
    if (icon_eye.classList.contains('fa-eye-slash')) {
        icon_eye.classList.replace("fa-eye-slash", "fa-eye")
        document.querySelector(".modal__container__content__fierd > input").setAttribute('type', 'text')
    } else {
        icon_eye.classList.replace("fa-eye", "fa-eye-slash")
        document.querySelector(".modal__container__content__fierd > input").setAttribute('type', 'password')

    }

})