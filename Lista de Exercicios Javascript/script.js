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


const numeros = [1, 2, 3, 4, 5];

console.log("A Soma dos elementos: " + soma(numeros));
console.log("A Média dos elementos: " + media(numeros));
console.log("O menor elemento desse vetor é: " + menorElemento(numeros))
console.log("O Segundo maior elemento desse vetor é: " + medalhaDePrata(numeros))