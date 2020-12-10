var tela= 1; // variável que inicia a tela
// Variáveis - tamanhos dos botões (posição x, posição y, largura, altura)
// Jogar e informações
var xmenu= 150; //jogar e informações
var yjogar= 310;
var yinformacoes= 390;
var larguramenu= 200;
var alturamenu= 50;
// Créditos
var xcreditos= 435;
var ycreditos= 395;
var lhcreditos= 30;
// Fechar
var xfechar= 400;
var yfechar= 30;
var largurafechar= 80;
var alturafechar= 40;
// Nível 1
var xn1= 20;
var yn1= 20;
var larguran1= 100;
var alturan= 110;
// Nível 2
var xn2= 140;
var yn2= 20;
var larguran2= 100;
// repete a variávelde nível 1 altura
// Nível 3
var xn3= 20;
var yn3= 140;
var larguran3= 100;
// repete a variável de nível 1 altura
// Nível 4
var xn4= 140;
var yn4= 140;
var larguran4= 100;
// repete a variável de nível 1 altura
// Tentar novamente
var xtentar= 360;
var ytentar= 380
var larguratentar= 100; 
var alturatentar= 50;
// Voltar
var xvoltar= 400;
var yvoltar= 300;
var larguravoltar= 80;
var alturavoltar= 40;
//PALAVRAS - n1
// Palavra 1= escola
var xp1= 70;
var yp1= 290;
//Palavra 2= praia
var xp2= 190; 
var yp2= 380;
//Palavra 3= cinema
var xp3= 280;
var yp3= 290;
// n2
// Palavra 4= jacaré
var xp4= 50;
var yp4= 200;
// Palavra 5= girafa
var xp5= 250; 
var yp5= 200;
// Palavra 6= pinguim
var xp6= 45;
var yp6= 310;
//Palavra 7= coelho
var xp7= 270; 
var yp7= 310;
//n3
// Palavra 8= amarelo
var xp8= 50;
var yp8= 300;
// Palavra 9= laranja
var xp9= 260;
var yp9= 200;
// Palavra 10= verde
var xp10= 270;
var yp10= 315;
// n4
// Palavra 11= pular
var xp11= 50; 
var yp11=300;
// Palavra 12= assistir
var xp12= 315;
var yp12= 200;
// Palavra 13= obedecer
var xp13= 210; 
var yp13= 280;

// Variáveis - imagens
var imgback0;
var imgback1;
var imgback2;
var imgback3;
var imgback4;
var imgback5;
var imgback6;
var imgback7;
var imgback8;
var imgback9;
var imgback10;
var imgback11;
var imgback12;
var imgback13;
var imgback14;
var imgback15;
var imgn1;
var imgn2;
var imgn3;
var imgn4;
var imgp1;
var imgp2;
var imgp3;
var imgp4;
var imgp5;
var imgp6;
var imgp7;
var imgp8;
var imgp9;
var imgp10;
var imgp11;
var imgp12;
var imgp13;

function preload(){
  // BACKGROUNDS
  imgback0= loadImage ('back(0).png');// nome do jogo
  imgback1= loadImage('back(1).png');// escolha o nível
  imgback2= loadImage('back(2).png');// informações
  imgback3= loadImage('back(3).png');// créditos
  imgback4= loadImage('back(4).png');// nivel 1
  imgback5= loadImage('back(5).png');// resposta certa nivel 1
  imgback6= loadImage('back(6).png');// resposta errada nível 1
  imgback7= loadImage('back(7).png');// nível 2
  imgback8= loadImage('back(8).png');// resposta certa nivel 2
  imgback9= loadImage('back(9).png');// resposta errada nivel 2
  imgback10= loadImage('back(10).png');// nível 3
  imgback11= loadImage('back(11).png');// resposta certa nivel 3
  imgback12= loadImage('back(12).png');// resposta errada nivel 3
  imgback13= loadImage('back(13).png');// nível 4
  imgback14= loadImage('back(14).png');// resposta certa nivel 4
  imgback15= loadImage('back(15).png');// resposta errada nivel 4
  // NIVEIS
  imgn1= loadImage ('n(1).png');// nível 1
  imgn2= loadImage ('n(2).png');// nível 2
  imgn3= loadImage ('n(3).png');// nível 3
  imgn4= loadImage ('n(4).png');// nível 4
  // PALAVRAS
  imgp1= loadImage ('p(1).png');// palavra 1 - escola
  imgp2= loadImage ('p(2).png');// palavra 2 - praia
  imgp3= loadImage ('p(3).png');// palavra 3 -cinema
  imgp4= loadImage ('p(4).png');// palavra 4 - jacaré
  imgp5= loadImage ('p(5).png');// palavra 5 - girafa
  imgp6= loadImage ('p(6).png');// palavra 6 - pinguim
  imgp7= loadImage ('p(7).png');// palavra 7 - coelho
  imgp8= loadImage ('p(8).png');// palavra 8 - amarelo
  imgp9= loadImage ('p(9).png');// palavra 9 - laranja
  imgp10= loadImage ('p(10).png');// palavra 10 - verde
  imgp11= loadImage ('p(11).png');// palavra 11 - pular
  imgp12= loadImage ('p(12).png') // palavra 12 - assistir
  imgp13= loadImage ('p(13).png');// palavra 13 - obedecer
}

function setup() { // função de inicialização
  createCanvas(500, 450); // tamanho da área de criação
}
//Tela menu
function draw() {// função de repetição 
   //TELAS
  if(tela==1)
    menu();
  
  if (tela==2)
    jogar();
  
  if (tela==3)
    informacoes();
  
  if (tela==4)
    creditos()

  if (tela==5)
    fase1();
  
  if (tela==6)
    respostacerta();
  
  if (tela==7)
    respostaerrada();
  
  if (tela==8)
    fase2();
  
  if (tela==9)
    respostacerta2();
  
  if (tela==10)
    respostaerrada2();
  
  if (tela==11)
    fase3();
  
  if (tela==12)
    respostacerta3 ();
  
  if (tela==13)
    respostaerrada3 ();
  
  if (tela==14)
    fase4 ();
  
  if (tela==15)
    respostacerta4 ();
  
  if (tela==16)
    respostaerrada4 ();
}

//MENU
function menu(){
  background (imgback0);
  textSize(25); // tamanho da letra
  textAlign(CENTER); //centralizada
  
  //JOGAR
  if (mouseX>xmenu && mouseX<xmenu+larguramenu && mouseY>yjogar && mouseY<yjogar+alturamenu){
    stroke (0,0,0); // cor do contorno do retângulo
    strokeWeight(2); // grossura do contorno
    fill ('#FFDE59'); // cor do preenchimento do retângulo  
    rect (xmenu, yjogar, larguramenu, alturamenu);
    if (mouseIsPressed){
      tela=2;
    }
  }
  noStroke (); // sem contorno
  fill (0,0,0); // cor da letra
  text('Jogar', 250, 340);
  
  //INFORMAÇÕES
  if (mouseX>xmenu && mouseX<xmenu+larguramenu && mouseY>yinformacoes && mouseY<yinformacoes+alturamenu){
    stroke (0,0,0); // cor do contorno do retângulo
    strokeWeight(2);// grossura do contorno
    fill ('#FFDE59'); // cor do preenchimento do retângulo
    rect (xmenu, yinformacoes, larguramenu, alturamenu);
    if (mouseIsPressed){
      tela=3;
    }
  }
  noStroke (); // sem contorno
  fill (0,0,0); // cor da letra
  text('Informações', 250, 420);
  
  // CRÉDITOS
  if (mouseX>xcreditos && mouseX<xcreditos+lhcreditos && mouseY>yinformacoes && mouseY<yinformacoes+lhcreditos){
    stroke (0,0,0); // cor do contorno do retângulo
    strokeWeight(2); // grossura do contorno
    fill ('#FFDE59'); // cor do preenchimento do retângulo
    rect (xcreditos, ycreditos, lhcreditos, lhcreditos);
    if (mouseIsPressed){
      tela=4;
    }
  }
  noStroke (); // sem contorno
  fill (0,0,0); // cor da letra
  text('+', 450, 420);
}

//SELECIONAR NÍVEL
function jogar (){
  background (imgback1); 
  
  // BOTÃO NÍVEL 1
  fill ('#CAE1FF'); 
  rect (xn1, yn1, larguran1, alturan, 20);
  image (imgn1, xn1, 30, 100, 100);
  if (mouseX>xn1 && mouseX<xn1+larguran1 && mouseY>yn1 && mouseY<yn1+alturan){
    stroke('#FF7F00');
    strokeWeight(4);
    noFill ();
    rect (xn1, yn1, larguran1, alturan, 20);
    if (mouseIsPressed){
      tela=5; // tela 2, nível 1
    }
  }
  noStroke ();
  fill (0,0,0);
  
  // NÍVEL 2
  fill ('#FFEC8B'); 
  rect (xn2, yn2, larguran2, alturan, 20);
  image (imgn2, xn2, 30, 100, 100);
  if (mouseX>xn2 && mouseX<xn2+larguran2 && mouseY>yn2 && mouseY<yn2+alturan){
    stroke('#FF7F00');
    strokeWeight(4);
    noFill ();
    rect (xn2, yn2, larguran2, alturan, 20);
    if (mouseIsPressed){
      tela=8; // tela 8, nível 2
    }
  }
  noStroke ();
  fill (0,0,0);
  
  // BOTÃO NÍVEL 3
  fill ('#AEEEEE');
  rect (xn3, yn3, larguran3, alturan, 20);
  image (imgn3, xn3, 150, 100, 100);
  if (mouseX>xn3 && mouseX<xn3+larguran3 && mouseY>yn3 && mouseY<yn3+alturan){
    stroke('#FF7F00');
    strokeWeight(4);
    noFill ();
    rect (xn3, yn3, larguran3, alturan, 20);
    if (mouseIsPressed){
      tela=11; // tela 8, nível 2
    }
  }
  noStroke ();
  fill (0,0,0);
  
  // BOTÃO NÍVEL 4
  fill ('#FFC1C1');
  rect (xn4, yn4, larguran4, alturan, 20);
  image (imgn4, xn4, 150, 100, 100);
  if (mouseX>xn4 && mouseX<xn4+larguran4 && mouseY>yn4 && mouseY<yn4+alturan){
    stroke('#FF7F00');
    strokeWeight(4);
    noFill ();
    rect (xn4, yn4, larguran4, alturan, 20);
    if (mouseIsPressed){
      tela=14; // 
    }
  }
  noStroke ();
  fill (0,0,0);
  
  // Botão voltar;
  if (mouseX>xvoltar && mouseX<xvoltar+larguravoltar && mouseY>yvoltar && mouseY<yvoltar+alturavoltar){
    stroke (0,0,0); // cor do contorno do retângulo
    strokeWeight(2);
    fill ('#FFDE59'); // cor do preenchimento do retângulo
    rect (xvoltar, yvoltar, larguravoltar, alturavoltar);
    if (mouseIsPressed){
      tela=1;
    }
  }
  noStroke (); // sem contorno
  textSize (20);
  fill (0,0,0); // cor da letra
  text('Sair', 440, 330); 
} // final da função jogar - tela==2

// INFORMAÇÕES
function informacoes(){
  background(imgback2);
  fill ('#FFDE59'); //cor do preenchimento do retângulo
  noStroke(); // sem contorno no retângulo
  rect (50, 140, 400, 220, 20); // tamanho
  // Texto - informações do jogo
  textSize (20); // tamanho da fonte
  fill(0,0,0); // cor da fonte
  text ('Habilidade: (EF01LP11) ', 250, 180);
  text ('O jogo relaciona os tipos de letras', 250, 210);
  text ('imprensa, cursiva, maiúscula e minúscula.', 250, 240);
  text ('O objetivo é conhecer, diferenciar e', 250, 270);
  text ('comparar esses formatos.', 250, 300);
  text ('Língua Portuguesa: 1º ano', 250, 330);
  //Botão fechar;
  if (mouseX>xfechar && mouseX<xfechar+largurafechar && mouseY>yfechar && mouseY<yfechar+alturafechar){
    stroke (0,0,0); // cor do contorno do retângulo
    strokeWeight(2);
    fill ('#FFDE59'); // cor do preenchimento do retângulo
    rect (xfechar, yfechar, largurafechar, alturafechar);
    if (mouseIsPressed){
      tela=1;
    }
  }
  noStroke (); // sem contorno
  textSize (20);
  fill (0,0,0); // cor da letra
  text('Fechar', 440, 60); 
}

// CRÉDITOS
function creditos(){
  background(imgback3);
  //Botão fechar;
  if (mouseX>xfechar && mouseX<xfechar+largurafechar && mouseY>yfechar && mouseY<yfechar+alturafechar){
    stroke (0,0,0); // cor do contorno do retângulo
    strokeWeight(2);
    fill ('#FFDE59'); // cor do preenchimento do retângulo
    rect (xfechar, yfechar, largurafechar, alturafechar);
    if (mouseIsPressed){
      tela=1;
    }
  }
  noStroke (); // sem contorno
  textSize (20);
  fill (0,0,0); // cor da letra
  text('Fechar', 440, 60);
}

// FASE 1
function fase1(){
  background (imgback4);
  //Escola
    noFill ();
    stroke (255,0,0);
    strokeWeight(2);
    rect (xp1, yp1, 160, 50);
    image (imgp1, 80, 295);
    if (mouseX>xp1 && mouseX<xp1+160 && mouseY>yp1 && mouseY<yp1+50){
      stroke ('#FFDE59');
      rect (xp1, yp1, 160, 50);
  if (mouseIsPressed){
    tela=6;
  }
}
  //Praia
    noFill ();
    stroke (255,0,0);
    rect (xp2, yp2, 160, 50);
    image (imgp2, 220, 385);
    if (mouseX>xp2 && mouseX<xp2+160 && mouseY>yp2 && mouseY<yp2+50){
      stroke ('#FFDE59');
      rect (xp2, yp2, 160, 50);
       if (mouseIsPressed){
    tela=7;
       }
    }
    //Cinema
    noFill ();
    stroke (255,0,0);
    rect (xp3, yp3, 160, 50);
    image (imgp3, 290, 285);
    if (mouseX>xp3 && mouseX<xp3+160 && mouseY>yp3 && mouseY<yp3+50){
      stroke ('#FFDE59');
      rect (xp3, yp3, 160, 50);
       if (mouseIsPressed){
    tela=7;
       }
    }
} // final da tela==5 

// RESPOSTA CERTA - TELA 6
function respostacerta(){
  background (imgback5);
  //Botão fechar;
  if (mouseX>xfechar && mouseX<xfechar+largurafechar && mouseY>yfechar && mouseY<yfechar+alturafechar){
    stroke (0,0,0); // cor do contorno do retângulo
    strokeWeight(2);
    fill ('#FFDE59'); // cor do preenchimento do retângulo
    rect (xfechar, yfechar, largurafechar, alturafechar);
    if (mouseIsPressed){
      tela=2; 
    }
  }
  noStroke (); // sem contorno
  textSize (20); // tamanho da letra
  fill (0,0,0); // cor da letra
  text('Fechar', 440, 60);
      
} // final da tela==6

// RESPOSTA ERRADA - TELA 7
function respostaerrada (){ 
  background (imgback6);
  //Botão tentar novamente;
  if (mouseX>xtentar && mouseX<xtentar+larguratentar && mouseY>ytentar && mouseY<ytentar+alturatentar){
    stroke (0,0,0); // cor do contorno do retângulo
    fill (255,0,0); // cor do preenchimento do retângulo
    rect (xtentar, ytentar, larguratentar, alturatentar);
    if (mouseIsPressed){
      tela=5; 
    }
  }
  noStroke (); // sem contorno
  textSize (15);
  fill (0,0,0);
  text ('Tentar', 410, 400);
  text ('novamente', 410, 420);
} // final da tela==7 
  
// NÍVEL 2 - TELA 8
function fase2(){
  background (imgback7);
  // Jacaré
  noFill ();
  stroke (255,0,0);
  strokeWeight(2);
  rect (xp4, yp4, 160, 70);
  image (imgp4, 40, 205);
  if (mouseX>xp4 && mouseX<xp4+160 && mouseY>yp4 && mouseY<yp4+70){
    stroke ('#FFDE59');
    rect (xp4, yp4, 160, 70);
    if (mouseIsPressed){
      tela= 10 // resposta errada
    }
  }
  // Girafa
  noFill ();
  stroke (255,0,0);
  strokeWeight(2);
  rect (xp5, yp5, 180, 70); 
  image (imgp5, 250, 190);
  if (mouseX>xp5 && mouseX<xp5+180 && mouseY>yp5 && mouseY<yp5+70){
    stroke ('#FFDE59');
    rect (xp5, yp5, 180, 70);
    if (mouseIsPressed){
      tela= 9 // resposta certa
    }
  }
  // Pinguim
  noFill ();
  stroke (255,0,0);
  strokeWeight(2);
  rect (xp6, yp6, 190, 70);
  image (imgp6, 50, 300);
  if (mouseX>xp6 && mouseX<xp6+190 && mouseY>yp6 && mouseY<yp6+70){
    stroke ('#FFDE59');
    rect (xp6, yp6, 190, 70);
    if (mouseIsPressed){
      tela= 10 // resposta errada
    }
  }
  // Coelho
  noFill ();
  stroke (255,0,0);
  strokeWeight(2);
  rect (xp7, yp7, 190, 70); 
  image (imgp7, 275, 310);
  if (mouseX>xp7 && mouseX<xp7+190 && mouseY>yp7 && mouseY<yp7+70){
    stroke ('#FFDE59');
    rect (xp7, yp7, 190, 70);
    if (mouseIsPressed){
      tela= 10 // resposta errada
    }
  }
} // final da tela 8

// RESPOSTA CERTA DO NÍVEL 2 - TELA 9
function respostacerta2 (){
  background (imgback8);
  //Botão fechar;
  if (mouseX>xfechar && mouseX<xfechar+largurafechar && mouseY>yfechar && mouseY<yfechar+alturafechar){
    stroke (0,0,0); // cor do contorno do retângulo
    strokeWeight(2);
    fill ('#FFDE59'); // cor do preenchimento do retângulo
    rect (xfechar, yfechar, largurafechar, alturafechar);
    if (mouseIsPressed){
      tela=2; 
    }
  }
  noStroke (); // sem contorno
  textSize (20); // tamanho da letra
  fill (0,0,0); // cor da letra
  text('Fechar', 440, 60);
}

// RESPOSTA ERRADA NIVEL 2 - TELA 10
function respostaerrada2 (){
  background (imgback9);
  //Botão tentar novamente;
  if (mouseX>xtentar && mouseX<xtentar+larguratentar && mouseY>ytentar && mouseY<ytentar+alturatentar){
    stroke (0,0,0); // cor do contorno do retângulo
    fill (255,0,0); // cor do preenchimento do retângulo
    rect (xtentar, ytentar, larguratentar, alturatentar);
    if (mouseIsPressed){
      tela=8; 
    }
  }
  noStroke (); // sem contorno
  textSize (15);
  fill (0,0,0);
  text ('Tentar', 410, 400);
  text ('novamente', 410, 420);
}

// NÍVEL 3 - TELA 11
function fase3 (){
  background (imgback10);
  // Amarelo
  noFill ();
  stroke (255,0,0);
  strokeWeight(2);
  rect (xp8, yp8, 180, 60);
  image (imgp8, 55, 305);
  if (mouseX>xp8 && mouseX<xp8+180 && mouseY>yp8 && mouseY<yp8+60){
    stroke ('#FFDE59');
    rect (xp8, yp8, 180, 60);
    if (mouseIsPressed){
      tela= 13 // resposta errada
    }
  }
  // Laranja
  noFill ();
  stroke (255,0,0);
  strokeWeight(2);
  rect (xp9, yp9, 170, 90);
  image (imgp9, 260, 205);
  if (mouseX>xp9 && mouseX<xp9+170 && mouseY>yp9 && mouseY<yp9+90){
    stroke ('#FFDE59');
    rect (xp9, yp9, 170, 90);
    if (mouseIsPressed){
      tela= 13 // resposta errada
    }
  }
  // Verde
  stroke (255,0,0);
  strokeWeight(2);
  rect (xp10, yp10, 150, 60);
  image (imgp10, 255, 305);
  if (mouseX>xp10 && mouseX<xp10+150 && mouseY>yp10 && mouseY<yp10+60){
    stroke ('#FFDE59');
    rect (xp10, yp10, 150, 60);
    if (mouseIsPressed){
      tela= 12 // resposta certa
    }
  }
} // final da tela== 11

// RESPOSTA CERTA 3 - TELA 12
function respostacerta3 (){
  background (imgback11);
  //Botão fechar;
  if (mouseX>xfechar && mouseX<xfechar+largurafechar && mouseY>yfechar && mouseY<yfechar+alturafechar){
    stroke (0,0,0); // cor do contorno do retângulo
    strokeWeight(2);
    fill ('#FFDE59'); // cor do preenchimento do retângulo
    rect (xfechar, yfechar, largurafechar, alturafechar);
    if (mouseIsPressed){
      tela=2; 
    }
  }
  noStroke (); // sem contorno
  textSize (20); // tamanho da letra
  fill (0,0,0); // cor da letra
  text('Fechar', 440, 60);
}

// RESPOSTA ERRADA 3 - TELA 13
function respostaerrada3 (){
  background (imgback12);
  //Botão tentar novamente;
  if (mouseX>xtentar && mouseX<xtentar+larguratentar && mouseY>ytentar && mouseY<ytentar+alturatentar){
    stroke (0,0,0); // cor do contorno do retângulo
    fill (255,0,0); // cor do preenchimento do retângulo
    rect (xtentar, ytentar, larguratentar, alturatentar);
    if (mouseIsPressed){
      tela=11; 
    }
  }
  noStroke (); // sem contorno
  textSize (15);
  fill (0,0,0);
  text ('Tentar', 410, 400);
  text ('novamente', 410, 420); 
}

// NÍVEL 4 - TELA 14
function fase4 (){
  background (imgback13);
  
  //Pular 
  noFill ();
  stroke (255,0,0);
  strokeWeight(2);
  rect (xp11, yp11, 120, 60);
  image (imgp11, 20, 305);
  if (mouseX>xp11 && mouseX<xp11+120 && mouseY>yp11 && mouseY<yp11+60){
    stroke ('#FFDE59');
    rect (xp11, yp11, 120, 60);
    if (mouseIsPressed){
      tela= 16 // resposta errada
    }
  }
  // Assitir
  noFill ();
  stroke (255,0,0);
  strokeWeight(2);
  rect (xp12, yp12, 150, 60); 
  image (imgp12, 295, 205);
  if (mouseX>xp12 && mouseX<xp12+150 && mouseY>yp12 && mouseY<yp12+60){
    stroke ('#FFDE59');
    rect (xp12, yp12, 150, 60);
    if (mouseIsPressed){
      tela= 16 // resposta errada
    }
  }
  // Obedecer
  noFill ();
  stroke (255,0,0);
  strokeWeight(2);
  rect (xp13, yp13, 190, 70);  
  image (imgp13, 210, 280);
  if (mouseX>xp13 && mouseX<xp13+210 && mouseY>yp13 && mouseY<yp13+70){
    stroke ('#FFDE59');
    rect (xp13, yp13, 190, 70);
    if (mouseIsPressed){
      tela= 15 // resposta certa
    }
  }
} 

// RESPOSTA CERTA 4 - TELA 15
function respostacerta4(){
background (imgback14);
  //Botão fechar;
  if (mouseX>xfechar && mouseX<xfechar+largurafechar && mouseY>yfechar && mouseY<yfechar+alturafechar){
    stroke (0,0,0); // cor do contorno do retângulo
    strokeWeight(2);
    fill ('#FFDE59'); // cor do preenchimento do retângulo
    rect (xfechar, yfechar, largurafechar, alturafechar);
    if (mouseIsPressed){
      tela=1; 
    }
  }
  noStroke (); // sem contorno
  textSize (20); // tamanho da letra
  fill (0,0,0); // cor da letra
  text('Fechar', 440, 60);
}

// RESPOSTA ERRADA 4 - TELA 16
function respostaerrada4 (){
  background (imgback15);
  //Botão tentar novamente;
  if (mouseX>xtentar && mouseX<xtentar+larguratentar && mouseY>ytentar && mouseY<ytentar+alturatentar){
    stroke (0,0,0); // cor do contorno do retângulo
    fill (255,0,0); // cor do preenchimento do retângulo
    rect (xtentar, ytentar, larguratentar, alturatentar);
    if (mouseIsPressed){
      tela=14; 
    }
  }
  noStroke (); // sem contorno
  textSize (15);
  fill (0,0,0);
  text ('Tentar', 410, 400);
  text ('novamente', 410, 420); 
}