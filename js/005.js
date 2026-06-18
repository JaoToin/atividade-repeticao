

const inputNome = document.querySelector('#nome')


const inputRenda = document.querySelector('#renda')

const inputIdade = document.querySelector('#idade')

const inputSexo = document.querySelector('#sexo')


const btnNum1 = document.querySelector('#btn-num1')

const divResult = document.querySelector('#result')

var contPessoasF = 0
var contPessoasM = 0

var mediaMasculino = 0
var contRendaMulheres = 0
var contRendaMasculino = 0
var media = 0

btnNum1.addEventListener('click', (evt) => {
   
    var pessoas = Number(inputNome.value)
    var rendam = Number(inputRenda.value)
    var rendaf = Number(inputRenda.value)
    
    
    
    if((rendaf >= 1000 && 3000) ){

        contRendaMulheres++    
}

    if(rendam )
   
 if((sexo == "masculino") || (sexo == "MASCULINO")) {
    contPessoasM++
 }
 else if((sexo == "feminino") || (sexo == "MASCULINO")){
    contPessoasF++
}




    divResult.innerHTML = `pessoas digitadas: ${contPessoasF + contPessoasM} <br> <br>
    media salarial masculina: ${(media + '#renda') % contPessoasM  } <br> <br>
    pessoas entre 18 e 65: ${contQuantidade} <br> <br>
    pessoas masculinas: ${contPessoasM} <br> <br>
    pessoas renda femininas a cima de 1000: ${contRendaMulheres}`


    
    inputIdade.value = ''
    inputSexo.value = ''
    inputNome.value = ''




})
    