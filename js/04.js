

const inputNome = document.querySelector('#nome')

const inputIdade = document.querySelector('#idade')

const inputSexo = document.querySelector('#sexo')


const btnNum1 = document.querySelector('#btn-num1')

const divResult = document.querySelector('#result')

var contMenor = 0
var contMaior = 0
var contQuantidade = 0
var contSexoFeminino = 0
var contSexoMasculino = 0

btnNum1.addEventListener('click', (evt) => {
   
    var idade = Number(inputIdade.value)
    var sexo = (inputSexo.value)

    
    
    if((idade <= 18) ){

        contMenor++    
}
    else if((idade >= 65)){
    contMaior++

 }
 if((idade > 18) && (idade < 65)){
    contQuantidade++
 }


 if((sexo == "masculino") || (sexo == "MASCULINO")) {
    contSexoMasculino++
 }
 else if((sexo == "feminino") || (sexo == "MASCULINO")){
    contSexoFeminino++
}




    divResult.innerHTML = `pessoas inferiores a 18: ${contMenor} <br> <br>
    pessoas acima de 65: ${contMaior} <br> <br>
    pessoas entre 18 e 65: ${contQuantidade} <br> <br>
    pessoas masculinas: ${contSexoMasculino} <br> <br>
    pessoas femininas: ${contSexoFeminino}`


    
    inputIdade.value = ''
    inputSexo.value = ''
    inputNome.value = ''




})
    