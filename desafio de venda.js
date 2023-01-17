const venda = {
    dataVenda: new Date("2022-11-13"),
    valorTotal: 1000.500,
    numeroParcelas: 12,
}

function calcularParcelas(venda) {
  const parcelas = []
    for (let i = 1; i <= venda.numeroParcelas; i++) {

        const parcela = {
            numeroParcela: i,
            dataVencimento: new Date(venda.dataVenda.setMonth(venda.dataVenda.getMonth() + 1)),
            valorParcela: (venda.valorTotal / venda.numeroParcelas)
        }
                
        parcela.numeroParcela = (parcela.numeroParcela).toLocaleString('pt-BR', {minimumIntegerDigits: 3})
        parcela.valorParcela = parcela.valorParcela.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
        parcela.dataVencimento =new Intl.DateTimeFormat('pt-BR').format(parcela.dataVencimento);

        parcelas.push(parcela)
        console.log(parcela)
    }
}

calcularParcelas(venda)
