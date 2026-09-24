function start(){
      esconderTela();
      document.getElementById("introducao").style.display = "block";
    }
    function opçoes(){
      esconderTela();
      document.getElementById("menuOpcoes").style.display = "block";
    }
    function sairOpçoes(){
      esconderTela();
      document.getElementById("menuPrincipal").style.display = "block";
    }
    function nomeCorreto() {
      NomeJogador = document.getElementById("nomeJogador").value;
      entradaDramatica();
    }
    function esconderTela() {
      let telas = document.querySelectorAll(".tela");
      telas.forEach(function(tela){
        tela.style.display = "none";
      })
    }
    function entradaDramatica(){
      esconderTela();
      document.getElementById("entradaD").style.display = "flex";
      document.getElementById("tituloDramatico").innerText = NomeJogador;
    }
    function iniciarJogo(){
      esconderTela();
      document.getElementById("tutorial").style.display = "block";
      atualizar();
    }