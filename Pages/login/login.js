function login() {
    // Obter os valores inseridos pelo usuário
    const nickname = document.getElementById("nickname").value;
    const password = document.getElementById("password").value;
  
    // Verificar se as credenciais são válidas
    if (nickname === "Zooao" && password === "web2") {
      alert("Login bem-sucedido!");
      window.location.href = "../home-page/home.html";
    } else {
      alert("Nome de usuário ou senha inválidos. Tente novamente.");
    }
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



function signUp() {
  window.location.href = "../sign-up/sign-up.html";
}
