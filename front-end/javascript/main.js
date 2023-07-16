const btnLogin = document.querySelector('#btn-login');
const btnCancelar = document.querySelector('#btn-cancelar');
const userNameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

const password = 123456;
const userName = 'Celso';

btnLogin.addEventListener('click', (e) => {
  e.preventDefault();

  if (!(userNameInput.value.toLowerCase() == userName.toLowerCase() && Number(passwordInput.value) == Number(password))) {
    alert('Usuário ou senha inválidos');
    return;
  }

  window.location.href = '../html/home.html';
});
