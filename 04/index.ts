const gerarEtiquetas = (produto: { produto: string, lote: number, ano: number, qtd: number }): string[] => {
    const resultado: string[] = [];
    let etiqueta = '';

    for (let i = 1; i <= produto.qtd; i++) {

        const qtd = i.toString().padStart(3, "0");
        etiqueta = `${produto.lote}-${produto.ano}-${qtd}`;
        resultado.push(etiqueta);
    }

    return resultado;
};

console.log(gerarEtiquetas({
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5
}));