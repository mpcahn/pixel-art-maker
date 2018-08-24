document.addEventListener('DOMContentLoaded', function () {
  var pixels = document.querySelectorAll('.pixel')
  var colorPicker = document.querySelector('.colorPicker')
  var color = '#ff0000'

  colorPicker.addEventListener('input', function() {
    color = colorPicker.value
  }, false)

  function colorChange() {
    this.style.backgroundColor = color
  }

  for (var i = 0; i < pixels.length; i++) {
    pixels[i].onclick = colorChange
  }
})