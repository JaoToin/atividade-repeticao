

const inputNum1 = document.querySelector('#num1')

const inputNum2 = document.querySelector('#num2')


const btnNum1 = document.querySelector('#btn-num1')

const divResult = document.querySelector('#result')

var cont12 = 0
var contPode = 0
var contNaoPode = 0

btnNum1.addEventListener('click', (evt) => {
    var num1 = Number(inputNum1.value)
    var num2 = Number(inputNum2.value)

    
    
    if((num1 >= 18) && (num1 <= 60) && (num2 > 50)){

        contPode++    

} else{
    contNaoPode++
}

cont12++

if(cont12 == 3) {
    inputNum1.setAttribute('disabled', 'disabled')
    inputNum2.setAttribute('disabled', 'disabled')


}

    divResult.innerHTML = `Total de pessoas que podem doar ${contPode} <br> <br>
    Total de pessoas que não podem doar ${contNaoPode}`
    
    inputNum1.value = ''
    inputNum2.value = ''

})
    