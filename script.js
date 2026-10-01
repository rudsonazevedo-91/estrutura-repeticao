function somaImpares() {
    let soma = 0;

    for (let n = 1; n <= 500; n++) {
        if (n % 2 !== 0 && n % 3 === 0) {
            soma += n;
        }
    }

    alert(`A soma dos números ímpares que são múltiplos de 3, entre 1 e 500, é: ${soma}`);
}



