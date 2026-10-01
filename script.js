function somaImpares() {
    let soma = 0;

    for (let n = 1; n <= 500; n++) {
        if (n % 2 !== 0 && n % 3 === 0) {
            soma += n;
        }
    }

    alert(`A soma dos números ímpares que são múltiplos de 3, entre 1 e 500, é: ${soma}`);
}

function menorEMaiorAltura() {
    let alturas = [
        1.35, 1.60, 1.90, 2.10, 1.98,
        2, 1.90, 1.55, 1.20, 1.93,
        1.78, 1.80, 1.83, 1.60, 1.3
    ];

    let menor = alturas[0];
    let maior = alturas[0];

    for (let altura of alturas) {
        if (altura > maior) {
            maior = altura;
        }

        if (altura < menor) {
            menor = altura;
        }
    }

    console.log(`Maior altura: ${maior}m`);
    console.log(`Menor altura: ${menor}m`);

    alert(`A maior altura é: ${maior} e a menor altura é: ${menor}`);
}

function mediaAritmetica() {
let soma = 0;
let positivos = 0;
let negativos = 0;
let quantidade = 0;

let valor = Number(prompt("Digite um valor (0 para encerrar):"));

while (valor !== 0) {
    soma += valor;
    quantidade++;

    if (valor > 0) {
        positivos++;
    } else {
        negativos++;
    }

    valor = Number(prompt("Digite outro valor (0 para encerrar):"));
}

if (quantidade > 0) {
    let media = soma / quantidade;
    let percentualPositivos = (positivos / quantidade) * 100;
    let percentualNegativos = (negativos / quantidade) * 100;

    console.log("Média aritmética: " + media.toFixed(2));
    console.log("Quantidade de valores positivos: " + positivos);
    console.log("Quantidade de valores negativos: " + negativos);
    console.log("Percentual de valores positivos: " + percentualPositivos.toFixed(2) + "%");
    console.log("Percentual de valores negativos: " + percentualNegativos.toFixed(2) + "%");
} else {
    console.log("Nenhum valor foi informado.");
}
}

function quantidadeNosIntervalos() {

}

function algoritmoEstruturado() {
    let quantidade = 0;
    let pares = 0;
    let impares = 0;
    let soma = 0;
    let somaPares = 0;

    let valor = Number(prompt("Digite um número positivo (0 para encerrar):"));

    while (valor !== 0) {
    if (valor > 0) {
        quantidade++;
        soma += valor;

        if (valor % 2 === 0) {
            pares++;
            somaPares += valor;
        } else {
            impares++;
        }
    }

    valor = Number(prompt("Digite outro número positivo (0 para encerrar):"));
}

    if (quantidade > 0) {
    let mediaGeral = soma / quantidade;
    let mediaPares = pares > 0 ? somaPares / pares : 0;

    console.log("Quantidade de números pares: " + pares);
    console.log("Quantidade de números ímpares: " + impares);
    console.log("Média dos valores pares: " + mediaPares.toFixed(2));
    console.log("Média geral dos números: " + mediaGeral.toFixed(2));
} else {
    console.log("Nenhum número positivo foi informado.");
}

}
