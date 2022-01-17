let inputLogin = document.querySelector('.input__login');
console.log(inputLogin);
let inputPassword = document.querySelector('.input__password');
console.log(inputPassword);
let loginBtn = document.querySelector('.login__btn');
console.log(loginBtn);

loginBtn.addEventListener('click', () => {
  if (inputLogin.value === '') alert('아이디를 입력해주세요');
});
