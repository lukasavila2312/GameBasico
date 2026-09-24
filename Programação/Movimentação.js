    function pular(){
      if(noChao){
        velocidadeY = forcaDoPulo;
        noChao = false;
        spriteJAtual = 3;
        estadoJogador = "pulando"
        atualizarSprite();
      }
    };
    esquerda.addEventListener("pointerdown", function(){
      segurandoEsquerda = true;
      if(estadoJogador === "pulando"){
        atualizarSprite();
      }
      else if(noChao === true){
      estadoJogador = "movendoE";
      spriteJAtual = null;
      atualizarSprite();
      }
    });
    esquerda.addEventListener("pointerup", function(){
      segurandoEsquerda = false;
      if(!segurandoDireita){
        estadoJogador = "parado"
        spriteJAtual = 1;
        atualizarSprite();
      }
      
    });
    esquerda.addEventListener("pointerleave", function(){
      if(!segurandoDireita){
      segurandoEsquerda = false;
        estadoJogador = "parado";
        spriteJAtual = 1;
      atualizarSprite();
      
      }
    })
    direita.addEventListener("pointerdown", function(){
      segurandoDireita = true;
      if(estadoJogador === "pulando"){
      atualizarSprite();
      }
      else if(noChao === true){
      estadoJogador = "movendoD";
      atualizarSprite();
      }
    }
    )
    direita.addEventListener("pointerup", function(){
      segurandoDireita = false;
      if(!segurandoEsquerda){
      estadoJogador = "parado";
      spriteJAtual = 1;
        atualizarSprite();
      }
    })
    direita.addEventListener("pointerleave", function(){
      segurandoDireita = false;
      estadoJogador = "parado";
      spriteJAtual = 1;
        atualizarSprite();
    })
    pulo.addEventListener("pointerdown", function(){
      pular();
    });
    pulo.addEventListener("pointerleave", function(){
      atualizarSprite();
    })

    function atualizarSprite(){
      
      if(estadoJogador === "parado"){
        if(spriteJAtual === 1){
          jogador.src="sprites/personagem1.png";
        }
        if(spriteJAtual === 2){
          jogador.src="sprites/personagem.png";
        }
      }
     if(estadoJogador === "movendoD"){
        jogador.src="sprites/movendoD.png"

     }
     if(estadoJogador === "movendoE"){
       jogador.src="sprites/movendoE.png"
     }
     if(estadoJogador === "pulando"){
       if(spriteJAtual === 3){
         jogador.src="sprites/jump01.png"
       };
       if(spriteJAtual === 4){
         jogador.src="sprites/jump02.png"
       };
       if(spriteJAtual === 5){
         jogador.src="sprites/jump03.png"
       };
       if(spriteJAtual === 6){
         jogador.src="sprites/jump04.png"
       };
       if(spriteJAtual === 7){
         jogador.src="sprites/falling01.png"
       }
       if(spriteJAtual === 8){
         jogador.src="sprites/falling02.png"
       }
       if(spriteJAtual === 9){
         jogador.src="sprites/falling03.png"
       }
       if(spriteJAtual === 10){
         jogador.src="sprites/falling04.png"
       }
     }
    }