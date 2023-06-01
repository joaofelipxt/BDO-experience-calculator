'use strict';
// Função para carregar o conteúdo do header
function loadHeader() {
    var headerPlaceholder = document.getElementById('header-template');
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/Pages/templates/header.html", true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        headerPlaceholder.innerHTML = xhr.responseText;
      }
    };
    xhr.send();
  }
  
  // Função para carregar o conteúdo do footer
  function loadFooter() {
    var footerPlaceholder = document.getElementById('footer-template');
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/Pages/templates/footer.html", true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        footerPlaceholder.innerHTML = xhr.responseText;
      }
    };
    xhr.send();
  }
  
  // Carrega o conteúdo do header e do footer quando a página terminar de ser carregada
  window.onload = function() {
    loadHeader();
    loadFooter();
  };
  