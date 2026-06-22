

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

btnNum1.addEventListener('click', () => {
    const idade = Number(inputIdade.value)
    const renda = Number(inputRenda.value)
    const sexo = inputSexo.value.trim().toUpperCase()

    if (isNaN(idade) || isNaN(renda) || sexo === '') {
        alert('Preencha idade, sexo e renda corretamente.')
        return
    }

    totalPessoas++

    if (sexo === 'M' || sexo === 'MASCULINO') {
        contPessoasMasculino++
        somaSalariosMasculinos += renda

        if (renda >= 2000) {
            contMasculinoRendaAcima2000++
        }
    } else if (sexo === 'F' || sexo === 'FEMININO') {
        contPessoasFeminino++

        if (renda >= 1000 && renda <= 3000) {
            contMulheresRendaEntre1000E3000++
        }

        if (renda >= 2000) {
            contFemininoRendaAcima2000++
        }
    } else {
        alert('Sexo inválido. Use M ou F (ou Masculino/Feminino).')
        totalPessoas--
        return
    }

    const mediaSalarioMasculino = contPessoasMasculino > 0
        ? (somaSalariosMasculinos / contPessoasMasculino).toFixed(2)
        : '0.00'

    const percentualMasculino = contPessoasMasculino > 0
        ? ((contMasculinoRendaAcima2000 / contPessoasMasculino) * 100).toFixed(2)
        : '0.00'

    const percentualFeminino = contPessoasFeminino > 0
        ? ((contFemininoRendaAcima2000 / contPessoasFeminino) * 100).toFixed(2)
        : '0.00'

    divResult.innerHTML = `
        Pessoas digitadas: ${totalPessoas} <br><br>
        Média salarial masculina: R$ ${mediaSalarioMasculino} <br><br>
        Mulheres com renda entre R$ 1000,00 e R$ 3000,00: ${contMulheresRendaEntre1000E3000} <br><br>
        Percentual masculino com renda >= R$ 2000,00: ${percentualMasculino}% <br><br>
        Percentual feminino com renda >= R$ 2000,00: ${percentualFeminino}%
    `

    inputIdade.value = ''
    inputSexo.value = ''
    inputRenda.value = ''
})
    