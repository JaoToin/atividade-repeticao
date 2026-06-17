

const inputNum1 = document.querySelector('#num1')

const btnNum1 = document.querySelector('#btn-num1')

const divResult = document.querySelector('#result')


btnNum1.addEventListener('click', (evt) => {
    var numDigitado = Number(inputNum1.value)

    for(i = 0; i <= numDigitado; i++){
    
        if(numDigitado % i === 0){
            divResult.innerHTML += `${i} <br> `
        }

    }
})
    