'use strict';

function validarLogin() {
  let nickname = document.getElementById('nickname').value;
  let password = document.getElementById('password').value;

  // Verificar se os campos estão vazios
  if (nickname === '' || password === '') {
    alert('Por favor, preencha todos os campos!');
    return false;
  }

  // Verificar o formato do campo de senha
  if (!validarFormatoSenha(password)) {
    alert(
      'A senha deve ter pelo menos 6 caracteres e conter pelo menos uma letra maiúscula, uma letra minúscula e um número!'
    );
    return false;
  }

  // Todas as validações passaram, permitir o envio do formulário
  document.forms[0].submit(); // Envia o formulário
  window.location.href = "../home-page/home.html";
  return false;
}

function validarFormatoSenha(password) {
  // Regex para verificar o formato da senha
  var formatoSenha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;

  return formatoSenha.test(password);
}

/* const button = document.getElementById("login-btn");
const originalButton = button.style.cssText;

button.addEventListener("mouseover", function() {
  button.style.backgroundColor = "orange";
  button.style.color = "black";
});
button.addEventListener("mouseout", function() {
  button.style.cssText = originalButton;
}); */

function togglePasswordVisibility() {
  const passwordInput = document.getElementById('password');
  const showPasswordCheckbox = document.getElementById('showPasswordCheckbox');

  if (showPasswordCheckbox.checked) {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
}

function signUp() {
  window.location.href = "../sign-up/sign-up.html";
}

function exibirMensagem() {
  const confirma = confirm(
    'Welcome to your Black Desert Calculator! You must be at least 12 years old to use this site.'
  );

  if (confirma) {
    const age = prompt('How old are you?');
    if (age >= 12) {
      alert('Enjoy!');
    } else {
      alert('Sorry, you must be at least 12 years old to use this site.');
      window.location.href = "";
    }
  } else {
    alert('You need to confirm your age!');
    window.location.href = "";
  }
}

setTimeout(exibirMensagem, 750);
