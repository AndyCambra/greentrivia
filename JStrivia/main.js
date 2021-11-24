let preg = document.getElementById('tarjeta')

function sendQuestion(i) {
  preg.innerHTML = `
    <h5 class="card-header" id="tituloTarjeta">Pregunta ${questions[i].id} de ${questions.length}</h5>
        <div class="card-body">
          <h5 class="card-title" id="tituloPregunta">${questions[i].text} </h5>
          <p class="card-text" id="respuesta1">${questions[i].answer1}</p>
          <p class="card-text" id="respuesta2">${questions[i].answer2}</p>
          <p class="card-text" id="respuesta3">${questions[i].answer3}</p>
`
  let respuestaForm = document.getElementById('enviar')
  respuestaForm.addEventListener('click', function (e) {
    e.preventDefault()
    const userInput = document.getElementById('userResponse')
    let pregunta = userInput.value
    if (pregunta) {
      let isCorrect = questions[i].isCorrect
      let points = questions[i].points
      respuestas.push({ respuestaUsuario: pregunta, isCorrect, points })

      userInput.value = ''
      i++
      if (i < questions.length) {
        console.log(i)
        return sendQuestion(i)
      }
      return compare()
    }
  })
}

function compare() {
  for (let i = 0; i < respuestas.length; i++) {
    if (respuestas[i].respuestaUsuario == respuestas[i].isCorrect) {
      ;(comp = true), (score = respuestas[i].points)
    } else {
      ;(comp = false), (score = 0)
    }
    comparing.push({ comp, score })
    console.log('comparing', comparing)
  }

  return setScore()
}

function setScore() {
  for (let i = 0; i < comparing.length; i++) {
    finalScore += comparing[i].score
    corrects += comparing[i].comp
    console.log('Resultado ' + finalScore, corrects)
  }
  let mostrarResultados = document.getElementById('obtenerResultados')
  let mostrando = document.createElement('p')
  mostrando.innerHTML = `
  <a class="result-link" id="goResults" href="/results.html">Ver Resultados</a>`
  mostrarResultados.appendChild(mostrando)

  const correctsJSON = JSON.stringify(corrects)
  localStorage.setItem('corrects', correctsJSON)
  const scoreJSON = JSON.stringify(finalScore)
  localStorage.setItem('score', scoreJSON)
}

const userData = JSON.parse(localStorage.getItem('players'))

let userName = document.getElementById('showName')
let showName = document.createElement('p')
showName.innerHTML = `
<p>Hola ${userData[0].name}!</p>
`
userName.appendChild(showName)
