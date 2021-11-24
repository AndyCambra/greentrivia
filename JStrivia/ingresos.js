let nuevasPreguntas = []

let pInfo = document.getElementById('ingresos')

pInfo.addEventListener('submit', function (e) {
  e.preventDefault()
  let ingresosData = new FormData(e.target)
  class NuevoIngreso {
    constructor(text, points, answer1, answer2, answer3, isCorrect) {
      ;(this.text = ingresosData.get('pregText')),
        (this.points = ingresosData.get('pregPoints')),
        (this.answer1 = ingresosData.get('awns1')),
        (this.answer2 = ingresosData.get('awns2')),
        (this.answer3 = ingresosData.get('awns3')),
        (this.isCorrect = ingresosData.get('isCorrect'))
    }
  }
  pInfo.reset()
  nuevasPreguntas.push(new NuevoIngreso())
  console.log(nuevasPreguntas)
})

let mostrar = document.getElementById('showbutton')
mostrar.addEventListener('click', function (e) {
  e.preventDefault()
  let putIn = document.getElementById('show')
  let newInTable = document.createElement('div')
  for (let i = 0; i < nuevasPreguntas.length; i++) {
    newInTable.innerHTML += `
  <table class="normal">
<tr>
<td>${nuevasPreguntas[(i = nuevasPreguntas.length - 1)].text}</td>
<td>${nuevasPreguntas[(i = nuevasPreguntas.length - 1)].points}</td>
<td>${nuevasPreguntas[(i = nuevasPreguntas.length - 1)].answer1}</td>
<td>${nuevasPreguntas[(i = nuevasPreguntas.length - 1)].answer2}</td>
<td>${nuevasPreguntas[(i = nuevasPreguntas.length - 1)].answer3}</td>
<td>${nuevasPreguntas[(i = nuevasPreguntas.length - 1)].isCorrect}</td>
</tr>
</table>
`
  }
  putIn.appendChild(newInTable)
})
