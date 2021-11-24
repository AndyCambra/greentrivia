const questions = []
$(() => {
  fetch('dataGreen.json')
    .then((respuesta) => respuesta.json())
    .then((data) => {
      for (let dato of data) {
        questions.push(dato)
      }
      sendQuestion(0)
      console.log(questions)
    })
})
