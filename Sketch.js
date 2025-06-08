let formaAtual = 'livre';
let corAtual = 0;
let pontoInicial = null;

function setup() {
  const canvas = createCanvas(windowWidth, windowHeight - 80);
  canvas.position(0, 80);
  background(255);

  // Botão de mudar cor
  const botaoCor = createButton('Mudar Cor');
  botaoCor.position(10, 10);
  botaoCor.mousePressed(mudarCor);

  // Botão de desenho livre
  const botaoLivre = createButton('Desenho Livre');
  botaoLivre.position(120, 10);
  botaoLivre.mousePressed(() => {
    formaAtual = 'livre';
  });

  // Botão de linha reta
  const botaoLinha = createButton('Linha Reta');
  botaoLinha.position(230, 10);
  botaoLinha.mousePressed(() => {
    formaAtual = 'linha';
    pontoInicial = null;
  });

  // Botão de retângulo
  const botaoRetangulo = createButton('Retângulo');
  botaoRetangulo.position(340, 10);
  botaoRetangulo.mousePressed(() => {
    formaAtual = 'retangulo';
    pontoInicial = null;
  });
}

function draw() {
  fill(0);
  noStroke();
  rect(0, 0, 160, 20); // fundo para texto
  fill(255);
  textSize(12);
  text(`X: ${mouseX}  Y: ${mouseY}`, 10, 15);

  if (mouseIsPressed && formaAtual === 'livre') {
    stroke(corAtual, 0, 0);
    strokeWeight(2);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function mousePressed() {
  pontoInicial = createVector(mouseX, mouseY);
}

function mouseReleased() {
  if (pontoInicial === null) return;

  stroke(corAtual, 0, 0);
  strokeWeight(2);

  if (formaAtual === 'linha') {
    line(pontoInicial.x, pontoInicial.y, mouseX, mouseY);
  } else if (formaAtual === 'retangulo') {
    const largura = mouseX - pontoInicial.x;
    const altura = mouseY - pontoInicial.y;
    noFill();
    rect(pontoInicial.x, pontoInicial.y, largura, altura);
  }

  pontoInicial = null;
}

function keyPressed() {
  if (key === 'c' || key === 'C') {
    background(255);
  }
}

function mudarCor() {
  corAtual = random(0, 255);
}
