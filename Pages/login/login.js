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

const botao = document.getElementById("login-btn");
botao.addEventListener("mouseover", function() {
  botao.style.backgroundColor = "red";
  botao.style.color = "white";
});
botao.addEventListener("mouseout", function() {
  botao.style.backgroundColor = "blue";
  botao.style.color = "white";
});
