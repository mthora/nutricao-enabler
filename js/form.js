/* Adicionando novo paciente */

const formSubmit = document.getElementById("adicionar-paciente");
formSubmit.addEventListener("click", (e)=>{
    e.preventDefault();

    const form = document.getElementById("form-add");
    const table = document.getElementById("tabela-pacientes");

    const altura = form.altura.value;
    const peso = form.peso.value;
    const nome = form.nome.value;
    const gordura = form.gordura.value;

    const pacienteTr = document.createElement("tr");

    const alturaTd = document.createElement("td");
    const pesoTd = document.createElement("td");
    const nomeTd = document.createElement("td");
    const gorduraTd = document.createElement("td");
    const imcTd = document.createElement("td");

    alturaTd.textContent = altura;
    pesoTd.textContent = peso;
    nomeTd.textContent = nome;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    table.appendChild(pacienteTr);
});