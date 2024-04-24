const listaNumeros = [1, 5, 2];

const criarTabuada = (numeros: number[]): string => {
    let tabuada: string = '';

    for (const numero of numeros) {

        for (let multiplicador = 0; multiplicador <= 10; multiplicador++) {

            const resultado = numero * multiplicador;
            tabuada += `${numero} x ${multiplicador} = ${resultado} \n`;
        }

        tabuada += '--------------- \n'
    }

    return tabuada;
};

console.log(criarTabuada(listaNumeros));