let nombre = ''
let edad = 0
const infoPlayer = []

$(() => {
  $('#name-player').change((e) => {
    nombre = e.target.value
    console.log(e.target.value)

    $('#age-player').change((e) => {
      edad = e.target.value
      console.log(e.target.value)

      infoPlayer.push({ name: nombre, age: edad })
      console.log(infoPlayer)
      localStorage.setItem('players', JSON.stringify(infoPlayer))
    })
  })
})

$('#title').hide().fadeIn(1500)
$('#form').hide().delay(1600).fadeIn(1500)
$('#go-button').hide().delay(3200).fadeIn(1500)
