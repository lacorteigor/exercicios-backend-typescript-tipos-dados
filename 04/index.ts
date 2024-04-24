const gerarEtiquetas = (produto: { produto: string, lote: number, ano: number, qtd: number }): string[] => {
    const resultado: string[] = [];

    for (let qtd = 1; qtd <= produto.qtd; qtd++) {

        const etiqueta = `${produto.lote}-${produto.ano}-${qtd.toString().padStart(3, "0")}`;
        resultado.push(etiqueta);
    }

    return resultado;
};

console.log(gerarEtiquetas({
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 11
}));