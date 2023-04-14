const primeiroDropdown = document.getElementById("primeiroDropdown");

// seleciona o container do segundo dropdown
const containerSegundoDropdown = document.getElementById("containerSegundoDropdown");

function criarOpcoesSegundoDropdown(opcoes) {
  // limpa o container do segundo dropdown
  containerSegundoDropdown.innerHTML = "";

  // cria o segundo dropdown
  const segundoDropdown = document.createElement("select");

  // itera sobre as opções e cria uma opção para cada uma
  for (let i = 0; i < opcoes.length; i++) {
    const opcao = document.createElement("option");
    opcao.value = opcoes[i].valor;
    opcao.text = opcoes[i].nome;
    segundoDropdown.appendChild(opcao);
  }

  // adiciona o segundo dropdown ao container
  containerSegundoDropdown.appendChild(segundoDropdown);
}

const opcoes = [];

for (let i = 1; i <= 10; i++) {
  opcoes.push(i);
}

const opcoesNomeadas = opcoes.map(function(valor) {
  return {nome: valor.toString(), valor: valor};
});

console.log(opcoesNomeadas);
criarOpcoesSegundoDropdown(opcoesNomeadas);

// adiciona evento onchange para detectar quando o usuário selecionar uma opção
primeiroDropdown.onchange = function() {
  // verifica se a opção "opcao1" foi selecionada
  if (primeiroDropdown.value === "opcao1") {
    // cria as opções do segundo dropdown
    criarOpcoesSegundoDropdown(opcoesNomeadas);
  }
  // verifica se a opção "opcao2" foi selecionada
  else if (primeiroDropdown.value === "opcao2") {
    // cria as opções do segundo dropdown com números de 1 a 30

    const opcoes2 = [];

    for (let i = 1; i <= 30; i++) {
      opcoes2.push(i);
    }

    const opcoes2Nomeadas = opcoes2.map(function(valor) {
      return {nome: valor.toString(), valor: valor};
    });

    criarOpcoesSegundoDropdown(opcoes2Nomeadas);
  }

  else if(primeiroDropdown.value === "opcao3") {
    // cria as opções do terceiro dropdown com números de 1 a 50

    const opcoes3 = [];

    for (let i = 1; i <= 50; i++) {
      opcoes3.push(i);
    }

    const opcoes3Nomeadas = opcoes3.map(function(valor) {
      return {nome: valor.toString(), valor: valor};
    });

    criarOpcoesSegundoDropdown(opcoes3Nomeadas);
  }
}




