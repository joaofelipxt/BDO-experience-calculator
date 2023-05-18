"use strict";

/*function signUp() {
  if (!validarSenhas()) {
    return false;
  }

  window.location.href = "../home-page/home.html";
  return false;
} 

function validarSenhas() {
  const senha = document.getElementById("password-sign-up").value;
  const confirmSenha = document.getElementById("confirm-password").value;
  const mensagemSenhas = document.getElementById("mensagem-senhas");

  if (senha !== confirmSenha) {
    mensagemSenhas.textContent = "As senhas não são iguais.";
    mensagemSenhas.style.color = "red";
    mensagemSenhas.style.fontWeight = "bold";
    return false;
  } else {
    mensagemSenhas.textContent = "";
    return true;
  }
} */

function signUp(event) {
    if (!validarSenhas()) {
      exibirMensagemSenhaIncorreta();
      event.preventDefault();
    } else {
      setTimeout(function() {
        window.location.href = "../home-page/home.html";
      }, 0);
    }
  }
  
  function validarSenhas() {
    const senha = document.getElementById("password-sign-up").value;
    const confirmSenha = document.getElementById("confirm-password").value;
  
    return senha === confirmSenha;
  }
  
  function exibirMensagemSenhaIncorreta() {
    const mensagemSenhas = document.getElementById("mensagem-senhas");
    mensagemSenhas.textContent = "As senhas não são iguais.";
    mensagemSenhas.style.color = "red";
    mensagemSenhas.style.fontWeight = "bold";
  }
