const correctsFinales = localStorage.getItem('corrects')

const scoreFinales = localStorage.getItem('score')

const userData = JSON.parse(localStorage.getItem('players'))

let showCorrects = document.getElementById('mostrarCorrectas')
let inCorrects = document.createElement('div')
inCorrects.innerHTML = `
<p class="results-name">Llegamos al final ${userData[0].name}!</p>
<p class="results-corrects">Respuestas correctas</p><p class="corrects-span">${correctsFinales}</p> 
<p class="results-corrects">Puntos</p> <p class="corrects-span">${scoreFinales}</p>

`
showCorrects.appendChild(inCorrects)
