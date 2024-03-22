function soma() {
  let indice = 13,
    soma = 0,
    k = 0;

  while (k < indice) {
    k = k + 1;
    soma = soma + k;
  }

  console.log("Soma = %s", soma);
}

function fibonacci(n, x) {
  let f = [],
    a = 0,
    b = 1,
    prox;

  for (let i = 1; i <= n; i++) {
    console.log(a);
    prox = a + b;
    a = b;
    b = prox;
    f.push(b);
  }
  if (f.includes(x)) {
    console.log("%s pertence à sequência", x);
  } else {
    console.log("%s não pertence à sequência", x);
  }
}

// fibonacci(10, 21);

function proxElemento() {
  let a = 1;

  for (let i = 1; i <= 5; i++) {
    a += 2;
    console.log(a);
  }
}
//proxElemento();

function proxElemento2() {
  let a = 2;
  for (let i = 1; i <= 6; i++) {
    a *= 2;
    console.log(a);
  }
}

//proxElemento2();

function proxElemento3() {
  let a = 0;
  for (let i = 1; i <= 6; i++) {
    a = i * i;
    console.log(a);
  }
}

//proxElemento3();

function proxElemento4() {
  let a = 0,
    b = 1,
    prox;
  for (let i = 1; i <= 7; i++) {
    prox = a + b;
    a = b;
    b = prox;
    console.log(a);
  }
}

//proxElemento4();

function proxElemento5() {
  let a = 0,
    b = 1,
    prox;
  for (let i = 1; i <= 7; i++) {
    prox = a + b;
    a = b;
    b = prox;
    console.log(a);
  }
}

//proxElemento5();

//f) dois, dez, doze, dezesseis, dezessete, dezoito, dezenove, duzentos

//4) Ligaria uma, esperaria um tempo e desligaria, ligaria a segunda e deixaria acesa, depois iria em qualquer uma das salas, a que estiver quente é a primeira, a que estiver acesa é a segunda e a que estiver apagada é a terceira.

function reverseString() {
  let string = "target";
  let reverseString = "";

  for (i = string.length - 1; i >= 0; i--) {
    reverseString += string[i];
  }
  console.log(reverseString);
}

//reverseString();
