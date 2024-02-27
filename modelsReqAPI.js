const url = "https://github.com/"
const user = "adrianocesar01"

//async/await

window.onload = async function(){
    const response = await fetch(`${url}${user}`,{mode: 'cors'})
      
    const data = await response.json()
    console.log(response)
    const div = document.getElementById("conteudo")
    div.innerHTML = JSON.stringify(data)
}


// //Promise

// function reqPromise(){    
//     fetch(`${url}${user}`)
//     .then(response => response.json())
//     .then(data => {

//         const div = document.getElementById("conteudo")
//         div.innerHTML = JSON.stringify(data)
//     })

//     .catch(e => console.error(e))
// }


// //XMLHttpRequest

// function reqXMLHttpRequest(){

//     var xhttp = new XMLHttpRequest()

//         xhttp.onreadystatechange = function(){

//             if(this.readyState === 4 && this.stattus === 200){

//                 var div = document.getElementById("conteudo")
//                 div.innerHTML = xhttp.responseText
//         }
//     }

//     xhttp.open("GET", url + user, true)
//     xhttp.send()
// }