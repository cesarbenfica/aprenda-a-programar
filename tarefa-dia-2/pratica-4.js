let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};

if (produtoA.internacional === true) {
    let valorint = produtoA.valor * 1.2
    console.log(`O produto ${produtoA.nome} é de origem internacional. Seu valor de chegada é ${produtoA.valor} , com a taxa de importação fica ${valorint}!`)  
} else {
    let valornac = produtoA.valor * 1.12
    console.log(`O produto ${produtoA.nome} é de origem nacional. Seu valor de chegada é ${produtoA.valor} , com a taxa de importação fica ${valornac}!`)
}

if (produtoB.internacional === true) {
    let valorint = produtoB.valor * 1.2
    console.log(`O produto ${produtoB.nome} é de origem internacional. Seu valor de chegada é ${produtoB.valor} , com a taxa de importação fica ${valorint}!`)  
} else {
    let valornac = produtoB.valor * 1.12
    console.log(`O produto ${produtoB.nome} é de origem nacional. Seu valor de chegada é ${produtoB.valor} , com a taxa de importação fica ${valornac}!`)
}

if (produtoC.internacional === true) {
    let valorint = produtoC.valor * 1.2
    console.log(`O produto ${produtoC.nome} é de origem internacional. Seu valor de chegada é ${produtoC.valor} , com a taxa de importação fica ${valorint}!`)  
} else {
    let valornac = produtoC.valor * 1.12
    console.log(`O produto ${produtoC.nome} é de origem nacional. Seu valor de chegada é ${produtoC.valor} , com a taxa de importação fica ${valornac}!`)
}