let qtde = parseFloat(prompt('Quantos números deseja calcular: '));

let valores = [];
let numeros;
let potencia;
let raizQuadrada;
let raizCubica;
let soma = 0;

for(let i = 1; i <= qtde ; i++) {
    numeros = parseFloat(prompt('Digite os números: '));
    valores.push(numeros);
}
console.log(valores);

for(const num of valores) {
    soma += num;
}

let media = soma/valores.length;

console.log(`A soma é: ${soma}
A média é: ${media}`);

for (let x of valores) {
    potencia = Math.pow(x, 2)
    console.log(`A potência é: ${potencia}`)
}

for (let x of valores) {
    raizQuadrada = Math.sqrt(x)
    console.log(`A raiz quadrada é: ${raizQuadrada}`)
}

for (let x of valores) {
    raizCubica = Math.cbrt(x)
    console.log(`À raiz cubica é: ${raizCubica}`)
}

