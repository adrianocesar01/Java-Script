function cad(){
    try {

        const nome = document.getElementById('nome').value;
        const sobrenome = document.getElementById('sobrenome').value;
        console.log(`Nome: ${nome} || ${sobrenome}`);

        const email = document.getElementById('email').value;
        console.log(`Email: ${email}`);

        const telefone = document.getElementById('telefone').value;
        console.log(`Telefone: ${telefone}`);
    }
    catch {
        alert('erro ao imprimir');
    }
}

const cadastrar = document.querySelector('#cadastrar').addEventListener("click", cad)