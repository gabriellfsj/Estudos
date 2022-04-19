

let totalDeDias = 730

let qtdAnos, qtdMeses;

qtdAnos = (totalDeDias/365);
totalDeDias= totalDeDias%365;

qtdMeses= (totalDeDias/30);
totalDeDias= totalDeDias%30;

let resultado = (qtdAnos + " ano(s) " + '\n' + 
qtdMeses +" mes(es)" + '\n' +
totalDeDias + " dia(s)");

console.log(resultado);