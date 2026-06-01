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


// let str = "JavaScript";
// let str1 = "Linguagem de Programacao";
// str.length;
// console.log(str.charAt(5))
// console.log(str.slice(0,3))
// console.log(str1.split(" "))

// -----------------------------------------------------------------------------------------------------------------------------------------

// var x = 5
// var y =2
// x += 10
// console.log(x)
// y **= 2
// console.log(y)
// console.log(2+2*3)
// console.log(true && true)
// console.log(true && false)
// console.log(true || false)
// -----------------------------------------------------------------------------------------------------------------------------------------

// let preco = 10
// let quant = prompt("Qual quantidade: ")
// if (quant > 0) {
//     console.log(`Preco foi ${preco*quant}`)
// } else if (quant = 0){
//     console.log(`Nao foi definido quantidade`)
// } else if (quant < 0){
//     console.log(`Nao existe dividas`)
// }


// let idade = prompt("digite a idade:")
// if (idade <= 11){
//     alert("Crianca")
// } else if (idade > 11 && idade <= 17){
//     alert("adolecente")
// } else if (idade > 17 && idade <= 60){
//     alert("adulto")
// } else if (idade > 60){
//     alert("idoso")
// }


// let estado = prompt('qual estado: ')
// switch (estado.toLowerCase()) {
//     case "RG":
//         alert('Rio grande')
//         break;
//     case "RJ":
//         alert('Rio de janeiro')
//         break;
//     case "PR":
//         alert('parana')
//         break;
//     case "SP":
//         alert('sao paulo')
//         break;

//     default:
//         alert('nao cadastrado')
//         break;
// }

// -----------------------------------------------------------------------------------------------------------------------------------------


// for (let index = 0; index < 10; index++) {
//     console.log(index);
// }

// let x = 0
// while (x < 90) {
//     x += 10
//     console.log(x)
// }


// let continua = true
// let contador = 0
// while (continua) {
//     continua = confirm(`[${contador++}] Mais um loop`)
// }


// let num = 0
// do {
//     console.log(num)
//     num += 10
// } while (num < 90);
// -----------------------------------------------------------------------------------------------------------------------------------------