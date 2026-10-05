const leia = require('readline-sync');

function soma(vetor) {
    let soma = 0;
    for (let elemento of vetor){
        soma += elemento;
    }
    return soma;
}

function media(vetor){
    let soma = 0;
    let contador = 0;
    for (let elemento of vetor){
        soma += elemento;
        contador ++;
    }
    return soma / contador;
}

function menorElemento(vetor){
    let menor = vetor[0];
    for (let elemento of vetor){
        if(elemento < menor){
            menor = elemento
        }
    }
    return menor;
}

function medalhaDePrata(vetor){
    let maior = vetor[0];
    for (let elemento of vetor){
        if(elemento > maior){
            maior = elemento
        }
    }
    let contador = 0;
    let segundoMaior = vetor[0];
    for (let elemento of vetor){
        if(contador > 0){
            if(elemento < maior && elemento > segundoMaior){
                segundoMaior = elemento
            }
        }
        contador ++;
    }
    return segundoMaior;
}

function filtro(vetor){
    let arrayImpares = [];
    for (let elemento of vetor){
        if(elemento % 2 != 0){
            arrayImpares.push(elemento)
        }
    }
    return arrayImpares
}

function inverso(vetor){
    let arrayInvertido = vetor;

    arrayInvertido.reverse()

    return arrayInvertido
}

function histograma(vetor){
    
    let banda20 = "";
    let banda40 = "";
    let banda60 = "";
    let banda80 = "";
    let banda100 = "";

    for(let elemento of vetor){
        if(elemento <= 20){
            banda20 += "* ";
        }else if(elemento <= 40){
            banda40 += "* ";
        }else if(elemento <= 60){
            banda60 += "* ";
        }else if(elemento <= 80){
            banda80 += "* ";
        }else{
            banda100 += "* ";
        }
    }
    console.log("Exercicio 7:\n")
    console.log("[01, 20] :" + banda20);
    console.log("[21, 40] :" + banda40);
    console.log("[41, 60] :" + banda60);
    console.log("[61, 80] :" + banda80);
    console.log("[81, 100]:" + banda100);
}

function verificador(vetor) {
    console.log("Exercicio 8:\n");

    console.log("Qual nome você quer verificar no array?")
    let nome = leia.question();


    if (vetor.includes(nome)) {
        console.log("Este nome ESTÁ no array de nomes!");
    } else {
        console.log("Este nome NÃO ESTÁ no array de nomes.");
    }
}

function comparador(vetor1, vetor2) {
    if (vetor1.length !== vetor2.length) {
        return false;
    }
    for (let i = 0; i < vetor1.length; i++) {
        if (vetor1[i] !== vetor2[i]) { 
            return false;
        }
    }
    return true;
}

function removedor(vetor, indice) {
    let novoArray = vetor; 
    novoArray.splice(indice, 1);
    return novoArray;
}

function palindromo(entrada) {
    let texto = Array.isArray(entrada) ? entrada.join('') : entrada;
    
    let textoInvertido = texto.split('').reverse().join('');
    return texto === textoInvertido;
}

function intercalador(vetor1, vetor2) {
    let arrayIntercalado = [];
    for (let i = 0; i < vetor1.length; i++) {
        arrayIntercalado.push(vetor1[i]);
        arrayIntercalado.push(vetor2[i]);
    }
    return arrayIntercalado;
}

function compactador(vetor) {
    let arrayCompactado = [];
    for (let i = 0; i < vetor.length; i++) {
        if (i === 0 || vetor[i] !== vetor[i - 1]) {
            arrayCompactado.push(vetor[i]);
        }
    }
    return arrayCompactado;
}

const numeros = [1, 2, 3, 4, 5];
const histo = [32, 5, 63, 68, 89, 10, 42, 12, 16, 22, 72, 97];
const nomes = ["Lula", "Bolsonabo", "Luciano", "Mariana"];

console.log("Exercicio 1:\nA Soma dos elementos: " + soma(numeros));
console.log("Exercicio 2:\nA Média dos elementos: " + media(numeros));
console.log("Exercicio 3:\nO menor elemento desse vetor é: " + menorElemento(numeros))
console.log("Exercicio 4:\nO Segundo maior elemento desse vetor é: " + medalhaDePrata(numeros))
console.log("Exercicio 5:\nO novo array com números ímpares é: " + filtro(numeros))
console.log("Exercicio 6:\nO novo array invertido é: " + inverso(numeros))
console.log(histograma(histo))
console.log(verificador(nomes))
console.log("Exercicio 9:\n" +comparador([1, 2, 3], [1, 2, 3]));
console.log("Exercicio 10:\n" +removedor([1, 2, 3, 4, 5, 6, 8], 2));
console.log("Exercicio 11:\nÉ palindromo 'arara'? " + palindromo("arara"));

let nums = [1, 2, 3];
let letras = ['a', 'b', 'c'];

console.log("Exercicio 12:\n" + intercalador(nums, letras));

let arrayRepetido = ['a', 'a', 'b', 'b', 'b', 'c', 'a', 'a'];
console.log("Exercicio 13:\n" + compactador(arrayRepetido));