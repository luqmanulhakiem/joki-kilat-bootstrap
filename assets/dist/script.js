// Ambil elemen-elemen yang dibutuhkan
const btnEmail = document.getElementById('kontakEmail');
const btnPhone = document.getElementById('kontakPhone');
const kontakType = document.getElementById('kontakType');
const inputEmail = document.getElementById('email');
const inputPhone = document.getElementById('phoneInput');

btnEmail.addEventListener('click', function () {
    inputEmail.classList.replace('d-none', 'd-block');
    inputPhone.classList.replace('d-block', 'd-none');
    btnEmail.classList.add('active');
    btnPhone.classList.remove('active');
    kontakType.value = "email";
});

btnPhone.addEventListener('click', function () {
    inputPhone.classList.replace('d-none', 'd-block');
    inputEmail.classList.replace('d-block', 'd-none');
    btnPhone.classList.add('active');
    btnEmail.classList.remove('active');
    kontakType.value = "phone";
});