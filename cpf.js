const cpf = document.querySelector('input#cpf')

cpf.addEventListener('keypress', () => {
    let digito_cpf = cpf.value.length

    if(digito_cpf == 3 || digito_cpf == 7){
        cpf.value += '.'}

        else if(digito_cpf ===11){
            cpf.value += '-'
        }
})

cpf.addEventListener('keydown', function(e) {
    if ((e.keyCode >= 65 && e.keyCode <= 90) || 
    (e.keyCode == 32 || e.keyCode == 16) || 
    (e.keyCode >= 112 && e.keyCode <= 123)){
    e.preventDefault()
}
})
