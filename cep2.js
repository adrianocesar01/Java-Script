
async function Cep(cep){
    // let buscaCep = (cep)

    // let resultado = (`Resultado de (${valor1}+${valor2}) = ${buscaCep}`)
    // document.querySelector('input[id=resultado]').value = resultado

    if (cep !== '') {
        var x = cep.value.replace(/[^0-9]+/, '')
  
        const url = `https://viacep.com.br/ws/${x}/json/`
        //,{method: 'GET', mode:'cors', headers: {'content-type':'application/json;charset=utf-8'}}
        await fetch(url, { method: 'GET', mode: 'cors'})
          .then(response => response.json())
          .then(json => {
  
            if (json.logradouro) {
              document.querySelector('input[name=logradouro]').value = json.logradouro;
              document.querySelector('input[name=bairro]').value = json.bairro;
              document.querySelector('input[name=cidade]').value = json.localidade;
              document.querySelector('input[name=uf]').value = json.uf;
              document.querySelector('input[name=complemento]').value = json.complemento;
              document.querySelector('input[name=ddd]').value = json.ddd;
            }
          });
  
        //.catch(error => { return console.error(error);})
      } else { alert("Inserir Cep!"); }
}


window.onload=function(){

    cep.onclick = function () {
        const cep = document.querySelector("input[name=cep]")
        Cep(cep)
    }
}




const cep = document.querySelector("input[name=cep]")

// cep.addEventListener('blur', async () => {
    

//     if (cep !== '') {
//       var x = cep.value.replace(/[^0-9]+/, '')

//       const url = `https://viacep.com.br/ws/${x}/json/`
//       //,{method: 'GET', mode:'cors', headers: {'content-type':'application/json;charset=utf-8'}}
//       await fetch(url, { method: 'GET', mode: 'cors'})
//         .then(response => response.json())
//         .then(json => {

//           if (json.logradouro) {
//             document.querySelector('input[name=logradouro]').value = json.logradouro;
//             document.querySelector('input[name=bairro]').value = json.bairro;
//             document.querySelector('input[name=cidade]').value = json.localidade;
//             document.querySelector('input[name=uf]').value = json.uf;
//             document.querySelector('input[name=complemento]').value = json.complemento;
//             document.querySelector('input[name=ddd]').value = json.ddd;
//           }
//         });

//       //.catch(error => { return console.error(error);})
//     } else { alert("Inserir Cep!"); }

//   })


cep.addEventListener('keypress', () => {
    let digito_cep = cep.value.length
  
    if(digito_cep == 2){
        cep.value += '.'}
  
        else if(digito_cep == 6){
          cep.value += '-'
        }
  })
  
  //var regex = new RegExp("^[ 0-9a-zA-Z\b]+$");
         
  
  cep.addEventListener('keydown', function(e) {
    if ((e.keyCode >= 65 && e.keyCode <= 90) || 
        (e.keyCode == 32 || e.keyCode == 16) || 
        (e.keyCode >= 112 && e.keyCode <= 123)){
        e.preventDefault()
    }
  })