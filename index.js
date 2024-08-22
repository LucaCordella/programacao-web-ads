let pagina = document;

let botaoSubmeter = document.getElementById("botao-submeter");

botaoSubmeter.addEventListener("click", submeter);

console.log(nome);


function submeter() {

    let nome = document.getElementById("nome").value;
    console.log(nome);

    let cpf = document.getElementById("cpf").value;
    console.log(cpf);

    let idade = document.getElementById("idade").value;
    console.log(idade);

    let dataNascimento = document.getElementById("dataNascimento").value;
    console.log(dataNascimento);

    if(nome == "") { // não considerar nomes com somete espaços! dica: removr espaços em branco
        alert("Nome não deve ser vazio!")
    }

}

function validaCPF(cpf) {
    if(cpf == "") {
        return false;
    }

    if (/[a-zA-Z]/.test(cpf)) {
        return false;
    }

    if (/[^0-9.-]/.test(cpf)) {
        return false;
    }

    const cpfSemPontuacao = cpf.replace(/[.-]/g, '');
    if (cpfSemPontuacao.length !== 11 && cpf.length !== 14) {
        return false;
    }

    return true;
}
