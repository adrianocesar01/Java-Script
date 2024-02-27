const telefone = document.querySelector('input#telefone')

telefone.addEventListener('keydown', function(e) {
    if ((e.keyCode >= 65 && e.keyCode <= 90) || 
        (e.keyCode == 32 || e.keyCode == 16) || 
        (e.keyCode >= 112 && e.keyCode <= 123)){
        e.preventDefault()
    }
  })

const ddd = document.querySelector('input#ddd')

ddd.addEventListener('keydown', function(e) {
    if ((e.keyCode >= 65 && e.keyCode <= 90) || 
        (e.keyCode == 32 || e.keyCode == 16) || 
        (e.keyCode >= 112 && e.keyCode <= 123)){
        e.preventDefault()
    }
  })

const ddi = document.querySelector('input#ddi')

ddi.addEventListener('keydown', function(e) {
    if ((e.keyCode >= 65 && e.keyCode <= 90) || 
        (e.keyCode == 32 || e.keyCode == 16) || 
        (e.keyCode >= 112 && e.keyCode <= 123)){
        e.preventDefault()
    }
  })