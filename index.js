// Declaração da função
function somatorio(num) {
    var soma = 0;
    if (num > 0) {
        for (let i = 0; i < num; i++) {
            if ((i % 3 == 0) || (i % 5 == 0)) {
                soma += i;
            }
        }
        console.log(soma);
    }else{
        console.log("Valor invalido");
    }
}

// Chamada da função
somatorio(10); // O número passado pode ser personalizado