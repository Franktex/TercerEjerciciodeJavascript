// calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

let factorial = 1;
let num = 10;

while (true) {
  factorial *= num;
  num--;

  if (num === 0) {
    break;
  }
}

console.log(factorial);