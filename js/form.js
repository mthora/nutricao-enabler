/* Adicionando novo paciente a tabela */

const formSubmit = document.getElementById("adicionar-paciente");

formSubmit.addEventListener("click", (e)=>{
    e.preventDefault();

    const form = document.getElementById("form-add");
    const table = document.getElementById("tabela-pacientes");

    const paciente = obterPacienteFormulário(form);

    const pacienteTr = montaTr(paciente);

    table.appendChild(pacienteTr);
});

//Helper functions

function obterPacienteFormulário(form){

    let paciente = {
        altura: form.altura.value,
        peso: form.peso.value,
        nome: form.nome.value,
        gordura: form.gordura.value
    }

    return paciente
}

function montaTr(paciente) {
    const pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    const alturaTd = montaTd(paciente.altura, "info-altura");
    const pesoTd = montaTd(paciente.peso, "info-peso");
    const gorduraTd = montaTd(paciente.gordura, "info-gordura");
    const nomeTd = montaTd(paciente.nome, "info-nome")
    const imcTd = montaTd(undefined ,"info-imc");


    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    calcIMC(paciente.peso, paciente.altura, pacienteTr)

    return pacienteTr;
}

function montaTd(texto, classe){
    const td = document.createElement("td");
    td.textContent = texto;
    td.classList.add(classe);

    return td;
}