// Biblioteca Usada para mascarar valor do peso https://imask.js.org/guide.html

// Variáveis Gerais
var sexo
var idade
var altura
var peso
var resultadoFinal

// Variáveis das Páginas
var pagina1 = document.getElementById("pagina-1");
var pagina2 = document.getElementById("pagina-2");
var pagina3 = document.getElementById("pagina-3");
var pagina4 = document.getElementById("pagina-4");
var pagina5 = document.getElementById("pagina-5");


// Variáveis da Página 1
var homem = document.getElementById("homem");
var mulher = document.getElementById("mulher");
homem.addEventListener("click", selecionaHomem);
mulher.addEventListener("click", selecionaMulher);


// Variáveis da Página 2
var homemIdade = document.getElementById("homem-idade");
var mulherIdade = document.getElementById("mulher-idade");

var textoIdade = document.getElementById("texto-idade");
var sliderIdade = document.getElementById("slider-idade");
sliderIdade.addEventListener("input", selecaoIdade);
var botaoIdade = document.getElementById("botao-idade")
botaoIdade.addEventListener("click", capturaIdade);


// Variáveis da Página 3
var sliderAltura = document.getElementById("slider-altura");
sliderAltura.addEventListener("input", selecaoAltura);
var botaoAltura = document.getElementById("botao-altura");
botaoAltura.addEventListener("click", capturaAltura);

var personagemAltura = document.getElementById("personagem-altura");
var valorAltura = document.getElementById("valor-altura");


// Variáveis da Página 4
var inputPeso = document.getElementById("input-peso");
const maskOptions = {
  mask: Number, // enable number mask
  scale: 1,  // digits after point, 0 for integers
  thousandsSeparator: '',  // any single char
  padFractionalZeros: false,  // if true, then pads zeros at end to the length of scale
  normalizeZeros: true,  // appends or removes zeros at ends
  radix: ',',  // fractional delimiter
  mapToRadix: ['.'],  // symbols to process as radix

  // additional number interval options (e.g.)
  // min: 1,
  max: 300.0,
  autofix: false,
};
var inputTextoMascarado = IMask(inputPeso, maskOptions);
inputTextoMascarado.on('complete', selecaoPeso);

var botaoPeso = document.getElementById("botao-peso");
botaoPeso.addEventListener("click", capturaPeso);
var valorPeso = document.getElementById("valor-peso");

// Variáveis da Página 5
var abaixo = "rotateZ(-80deg)";
var normal = "rotateZ(-27deg)";
var sobrepeso = "rotateZ(31deg)";
var obeso = "rotateZ(82deg)";
var classificacao


var valorFinal = document.getElementById("valor-final");
valorFinal.style.opacity = "0";
valorFinal.style.visibility = "hidden";
var carregando = document.getElementById("carregando");
var resultadoIMC = document.getElementById("resultado-imc");
resultadoIMC.style.opacity = "0";
resultadoIMC.style.visibility = "hidden";
var agulhaIndice = document.getElementById("agulha-indice");
agulhaIndice.style.opacity = "0";
agulhaIndice.style.visibility = "hidden";



// Implementações

function selecionaHomem() { 
  homem.removeEventListener("click", selecionaHomem);
  mulher.removeEventListener("click", selecionaMulher);
  mulherIdade.style.opacity = "0";
  mulherIdade.style.visibility = "hidden";
  mulherIdade.style.width = 0;
  mulherIdade.style.height = 0;
  mulherIdade.style.minWidth = 0;
  mulherIdade.style.maxWidth = 0;
  sexo = "homem";
  homemIdade.src = "assets/masculino-um-ano.svg";
  personagemAltura.src = "assets/masculino-um-ano.svg";
  console.log(sexo);
  apagarPagina1();
}

function selecionaMulher() {
  homem.removeEventListener("click", selecionaHomem);
  mulher.removeEventListener("click", selecionaMulher);
  homemIdade.style.opacity = "0";
  homemIdade.style.visibility = "hidden";
  homemIdade.style.width = 0;
  homemIdade.style.height = 0;
  homemIdade.style.minWidth = 0;
  homemIdade.style.maxWidth = 0;
  sexo = "mulher";
  mulherIdade.src = "assets/feminino-um-ano.svg";
  personagemAltura.src = "assets/feminino-um-ano.svg";
  console.log(sexo);
  apagarPagina1();
}

function apagarPagina1() {
  pagina1.style.opacity = "0";
  pagina1.style.visibility = "hidden";
  setTimeout(function(){
    pagina1.style.width = "0";
    pagina1.style.height = "0";
    pagina2.style.width = "100%";
    pagina2.style.height = "100%";
    document.body.style.backgroundColor = "#639a67";
    document.getElementsByTagName('h1')[1].style.color = "#A0B675";
    setTimeout(function() {
      pagina2.style.opacity = 1;
      pagina2.style.visibility = "visible";
    }, 1000);
  }, 1000);
}

function selecaoIdade() {
  textoIdade.innerText = sliderIdade.value;
  if (sexo == "homem") {
    if (sliderIdade.value <= 2) {
      homemIdade.src = "assets/masculino-um-ano.svg";
      homemIdade.alt = "Desenho de um bebê";
      personagemAltura.src = "assets/masculino-um-ano.svg";
    } 
    else if (sliderIdade.value > 2 && sliderIdade.value <= 7) {
      homemIdade.src = "assets/masculino-cinco-anos.svg";
      homemIdade.alt = "Desenho de uma criança";
      personagemAltura.src = "assets/masculino-cinco-anos.svg";
    }
    else if (sliderIdade.value > 7 && sliderIdade.value <= 16) {
      homemIdade.src = "assets/masculino-dez-anos.svg";
      homemIdade.alt = "Desenho de um adolescente";
      personagemAltura.src = "assets/masculino-dez-anos.svg";
    }
    else if (sliderIdade.value > 16 && sliderIdade.value <= 40) {
      homemIdade.src = "assets/masculino-vinte-anos.svg";
      homemIdade.alt = "Desenho de um adulto";
      personagemAltura.src = "assets/masculino-vinte-anos.svg";
    }
    else if (sliderIdade.value > 40 && sliderIdade.value <= 60) {
      homemIdade.src = "assets/masculino-cinquenta-anos.svg";
      homemIdade.alt = "Desenho de um idoso";
      personagemAltura.src = "assets/masculino-cinquenta-anos.svg";
    }
    else {
      homemIdade.src = "assets/masculino-cem-anos.svg";
      homemIdade.alt = "Desenho de um idoso mais velho";
      personagemAltura.src = "assets/masculino-cem-anos.svg";
    }
  }
  else {
    if (sliderIdade.value <= 2) {
      mulherIdade.src = "assets/feminino-um-ano.svg";
      mulherIdade.alt = "Desenho de uma bebê";
      personagemAltura.src = "assets/feminino-um-ano.svg";
    } 
    else if (sliderIdade.value > 2 && sliderIdade.value <= 7) {
      mulherIdade.src = "assets/feminino-cinco-anos.svg";
      mulherIdade.alt = "Desenho de uma criança";
      personagemAltura.src = "assets/feminino-cinco-anos.svg";
    }
    else if (sliderIdade.value > 7 && sliderIdade.value <= 16) {
      mulherIdade.src = "assets/feminino-dez-anos.svg";
      mulherIdade.alt = "Desenho de uma adolescente";
      personagemAltura.src = "assets/feminino-dez-anos.svg";
    }
    else if (sliderIdade.value > 16 && sliderIdade.value <= 40) {
      mulherIdade.src = "assets/feminino-vinte-anos.svg";
      mulherIdade.alt = "Desenho de uma adulta";
      personagemAltura.src = "assets/feminino-vinte-anos.svg";
    }
    else if (sliderIdade.value > 40 && sliderIdade.value <= 60) {
      mulherIdade.src = "assets/feminino-cinquenta-anos.svg";
      mulherIdade.alt = "Desenho de uma idosa";
      personagemAltura.src = "assets/feminino-cinquenta-anos.svg";
    }
    else {
      mulherIdade.src = "assets/feminino-cem-anos.svg";
      mulherIdade.alt = "Desenho de uma idosa mais velha";
      personagemAltura.src = "assets/feminino-cem-anos.svg";
    }
  }
}

function capturaIdade() {
  idade = parseInt(sliderIdade.value);
  console.log(idade);
  apagarPagina2();
}

function apagarPagina2() {
  pagina2.style.opacity = "0";
  pagina2.style.visibility = "hidden";
  setTimeout(function(){
    pagina2.style.width = "0";
    pagina2.style.height = "0";
    pagina3.style.width = "100%";
    pagina3.style.height = "100%";
    document.body.style.backgroundColor = "#d8ebb5";
    document.getElementsByTagName('h1')[2].style.color = "#639a67";
    setTimeout(function() {
      pagina3.style.opacity = 1;
      pagina3.style.visibility = "visible";
    }, 1000);
  }, 1000);
}

function selecaoAltura() {
  // toFixed é um método de floats para definir o número das casas decimais depois da vírgula
  // e já transforma em uma string
  var resultadoAltura = (sliderAltura.value / 100).toFixed(2); 
  valorAltura.innerText = resultadoAltura + "m";
}

function capturaAltura() {
  altura = parseFloat((sliderAltura.value / 100).toFixed(2));
  console.log(altura);
  apagarPagina3();
}

function apagarPagina3() {
  pagina3.style.opacity = "0";
  pagina3.style.visibility = "hidden";
  setTimeout(function(){
    pagina3.style.width = "0";
    pagina3.style.height = "0";
    pagina4.style.width = "100%";
    pagina4.style.height = "100%";
    document.body.style.backgroundColor = "#d9bf77";
    document.getElementsByTagName('h1')[3].style.color = "#673800";
    setTimeout(function() {
      pagina4.style.opacity = 1;
      pagina4.style.visibility = "visible";
      setTimeout(function() {
        inputPeso.focus({focusVisible: true});
      }, 100);
    }, 1000);
  }, 1000);
}

function selecaoPeso() {
  valorPeso.innerText = inputTextoMascarado.value + "KG";
  
}

function capturaPeso() {
  peso = parseFloat(inputTextoMascarado.value);
  console.log(peso);
  if (peso >= 1) {
    apagarPagina4();
  }
  else {
    alert("Digite o seu peso no campo destacado")
  }
}

function apagarPagina4() {
  calculaIMC();
  pagina4.style.opacity = "0";
  pagina4.style.visibility = "hidden";
  setTimeout(function(){
    pagina4.style.width = "0";
    pagina4.style.height = "0";
    pagina5.style.width = "100%";
    pagina5.style.height = "100%";
    document.body.style.backgroundColor = "#00a5dd";
    document.getElementsByTagName('h1')[4].style.color = "white";
    setTimeout(function() {
      pagina5.style.opacity = 1;
      pagina5.style.visibility = "visible";
      setTimeout(function() {
        carregando.style.width = 0;
        carregando.style.height = 0;
        carregando.style.opacity = "0";
        carregando.style.opacity = "hidden";
        setTimeout(function() {
          valorFinal.style.opacity = "1";
          valorFinal.style.visibility = "visible";
          resultadoIMC.style.opacity = "1";
          resultadoIMC.style.visibility = "visible";
          agulhaIndice.style.opacity = "1";
          agulhaIndice.style.visibility = "visible";
          setTimeout(function() {
            agulhaIndice.style.transform = classificacao;
          }, 1000)
        }, 1000);
      }, 4300);
    }, 1000);
  }, 1000);
}

function calculaIMC() {
  resultadoFinal = (peso / (altura ** 2)).toFixed(2);
  valorFinal.innerText = resultadoFinal
  console.log(resultadoFinal);

  if (sexo == "homem") {
    if (resultadoFinal < 20.7) {
      classificacao = abaixo;
    }
    else if (resultadoFinal >= 20.7 && resultadoFinal <= 26.4) {
      classificacao = normal;
    }
    else if (resultadoFinal >= 26.5 && resultadoFinal <= 31.1) {
      classificacao = sobrepeso;
    }
    else {
      classificacao = obeso;
    }
  }
  else {
    if (resultadoFinal < 19.1) {
      classificacao = abaixo;
    }
    else if (resultadoFinal >= 19.1 && resultadoFinal <= 25.8) {
      classificacao = normal;
    }
    else if (resultadoFinal >= 25.9 && resultadoFinal <= 32.3) {
      classificacao = sobrepeso;
    }
    else {
      classificacao = obeso;
    }
  }
}