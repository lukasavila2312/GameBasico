    const jogador = document.getElementById("jogador");
    let spriteJAtual = 1;
    let NomeJogador = null;
    let estadoJogador = "parado";
    let x = 80;
    let y = 500;
    let yAnterior = y;
    let velocidade = 4;
    let velocidadeY = 0;
    let gravidade = 0.5;
    let forcaDoPulo = -10;
    let noChao = true;

    let segurandoEsquerda = false;
    let segurandoDireita = false;

    let esquerda = document.getElementById("esquerda");
    let direita = document.getElementById("direita");
    let pulo = document.getElementById("pulo");
    

    let inimigo1X = 250;
    let inimigo1Y = 455;

    atualizarSprite();

    function atualizar(){
 let blocos = document.querySelectorAll(".bloco");
      
      yAnterior = y;
      

if(y < 0) y = 0;
      let player = document.getElementById("jogador");
      let inimigo= document.getElementById("inimigo1");
      velocidadeY += gravidade;
      y += velocidadeY;
      if (segurandoDireita){
        x += velocidade;
      }
      if (segurandoEsquerda){
        x -= velocidade;
      }

      if (y >= window.innerHeight - 255){
        y = window.innerHeight - 255;
        velocidadeY = 0;
        noChao = true;
        if(estadoJogador === "pulando"){
          estadoJogador = "parado";
          spriteJAtual = 1;
          atualizarSprite();
        }
        
        if(estadoJogador=== "pulando"){
        estadoJogador = "parado"
        spriteJAtual = 1;
        atualizarSprite();
        }
      }
      if (x <= 0) x = 0;
      if (x + player.offsetWidth > window.innerWidth) {
        x = window.innerWidth - player.offsetWidth;
      }
      blocos.forEach(function(bloco){
      if (
  velocidadeY > 0 &&
  y + player.offsetHeight >= bloco.offsetTop &&
  yAnterior + player.offsetHeight <= bloco.offsetTop &&
  x + player.offsetWidth > bloco.offsetLeft &&
  x < bloco.offsetLeft + bloco.offsetWidth
) {
  y = bloco.offsetTop - player.offsetHeight;
  velocidadeY = 0;
  noChao = true;
  if(estadoJogador === "pulando"){
    estadoJogador = "parado";
    spriteJAtual = 1;
    atualizarSprite();
  }
      };})
      
      player.style.left = x + "px";
      player.style.top = y + "px";
      inimigo.style.left = inimigo1X + "px";
      inimigo.style.top = inimigo1Y + "px";
      
      requestAnimationFrame(atualizar);
    };

    setInterval( function() {
     if(estadoJogador === "parado"){
      if(spriteJAtual === 1){
        spriteJAtual = 2
    }
      else if(spriteJAtual === 2){
        spriteJAtual = 1; 
      }
      atualizarSprite();
     }
    },600);

   setInterval(function(){
     if(estadoJogador === "pulando"){

       if(spriteJAtual < 10 && spriteJAtual > 2){
         spriteJAtual++;
       }
       atualizarSprite();
     }
   }, 75);