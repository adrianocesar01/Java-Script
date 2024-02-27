const rg = document.querySelector('input#rg')

rg.addEventListener('keypress', () => {
    let digito_rg = rg.value.length

    if(digito_rg == 2 || digito_rg == 6){
        rg.value += '.'}

        else if(digito_rg ===10){
          rg.value += '-'
      }
})

rg.addEventListener('keydown', function(e) {
  if ((e.keyCode >= 65 && e.keyCode <= 90) || 
      (e.keyCode == 32 || e.keyCode == 16) || 
      (e.keyCode >= 112 && e.keyCode <= 123)){
      e.preventDefault()
  }
})