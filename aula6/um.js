// let exeobj = {
//         nr: 500,
//         str: "palavra"
// };

// console.log(exeobj.nr)
// console.log(exeobj)


// data = new Data();
// let livro = new Object();

// Exemplo de um objeto

// var livro = new Object();
// livro.titulo="A Bela e a Adormecida";
// livro.autor="Neil Gaiman";
// livro.editora="Rocco Jovens Leitores";
// livro.anoPublicacao=2015;
// livro.edicao="1ª";
// livro.paginas=72;
// livro.preco="R$ 30,00";
// livro.frete= function(ceporigem, cepdestino,peso){
//     var valorFrete=" ";
//     //script do calculo frete
//     return valorFrete;
// }
// livro.capitulo1="Era o reino mais próximo";
// livro.capitulo2="A rainha acordou cedo";
// livro.capitulo3="Os três anões emergiram";
// livro.capitulo4="-Dormindo? - perguntou a rainha";
// livro.capitulo5="Ela cavalgou um dia inteiro";
// livro.capitulo6="O castelo na Floresta de Acaire";
// var NomeLivre=livro.NomeLivre
// var NomeEditora=livro.editora
// console.log("Editora: "+NomeEditora+"\n"+"Livro: "+NomeLivre)

// function Carro() {
//     this.marca = 'Marca';
//     this.preco = 0;
// }
// const honda = new Carro();
// honda.marca = "Honda";
// honda.preco = 244000;

// const nissan = new Carro();
// nissan.marca = "nissan";
// nissan.preco = 120000;

// const fiat = new Carro();
// fiat.marca = "fiat";
// fiat.preco = 90000;


// class Carro {
//     constructor(marca, preco) {
//         this.marca = marca;
//         this.preco = preco;
//     }
// }
// function Carro(marca,preco) {
//     this.marca = marca;
//     this.preco = preco;
// }
// const honda = new Carro('Honda',244000);
// const nissan = new Carro('nissan',120000);
// const fiat = new Carro('fiat',90000);

// O JSON.stringify converte o objeto em uma string legível
// console.log(JSON.stringify(honda) + "\n" + JSON.stringify(nissan) + "\n" + JSON.stringify(fiat));



// let carro={
//     portas:4,
//     rodas:4,
//     marca:"Um carro",
//     Avenda:true
// }
// for (let detalhes in carro) {
//     if (!Object.hasOwn(carro, detalhes)) continue;
//     const element = carro[detalhes];
//     console.log(detalhes+":"+ element);
//     console.log(element);
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// function OlaMundo(){
//     console.log('Ola')
//     console.log('Mundo')
// }
// OlaMundo()

// function Msg(){
//     let msg = "ola mundo";
//     return msg;
//     console.log('mensagem nao retornada')
// }

// console.log(Msg())


// function somar(n1,n2){
//     return n1+n2;
// }
// console.log(somar(12,-3))

// let somar=(n1,n2) => n1+n2;
// console.log(somar(12,-3))


// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------