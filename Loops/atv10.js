let numero1 = parseInt(prompt("Digite o primeiro número:"));
let numero2 = parseInt(prompt("Digite o segundo número:"));

if (numero1 > numero2) {
  for (numero2; numero2<=numero1; numero2++) {
    document.write(" "+numero2);
  }
} else if (numero2 > numero1) {
  for (numero1; numero1<=numero2; numero1++) {
    document.write(" "+numero1);
  }
}