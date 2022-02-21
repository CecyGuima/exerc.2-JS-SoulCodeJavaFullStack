let binario = prompt('Digite um número binário: ')

let potencia = 0;
let decimal = 0;

for(let i = binario.length -1; i >=0 ; --i){
   decimal += Math.pow(2, potencia) * parseInt(binario.charAt(i))
   potencia++;
}

alert(decimal);