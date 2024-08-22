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
}
