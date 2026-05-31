// let nome;
// nome = 'Ana';
// console.log(nome);

// let nome;
// nome = 'Ana';
// nome = 'Ste';
// console.log(nome);



/* escopo de variaveis locais e globais */
/*
altura = 180;
{
    let peso = 70;
    console.log(altura);
    console.log(peso);
}
console.log(altura);
console.log(peso);  //Gera erro devido ser uma variavel dentro do deliitador de bloco, nao tem acesso a variavel peso por ser local
*/


let str = "JavaScript";
let str1 = "Linguagem de Programacao";
str.length;
console.log(str.charAt(5))
console.log(str.slice(0,3))
console.log(str1.split(" "))