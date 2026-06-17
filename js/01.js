

const divFor = document.querySelector('#div-for')

for (i = 1; i < 1000; i++ ){

if(i % 7 === 0){
    console.log(i)
    divFor.innerHTML += `${i} <br>`
}
}
