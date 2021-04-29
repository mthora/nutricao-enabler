/* Adicionando novo paciente a tabela */

const formSubmit = document.getElementById("adicionar-paciente");

formSubmit.addEventListener("click", (e)=>{
    e.preventDefault();

    const form = document.getElementById("form-add");
    const table = document.getElementById("tabela-pacientes");

    const erro = document.getElementById("erro");

    if (erro){
        erro.remove();
    }

    const paciente = obterPacienteFormulário(form);

    const pacienteTr = montaTr(paciente);

    if (!pacienteTr){
        const error = document.createElement("p");
        form.appendChild(error);
        error.id = "erro";
        error.style.color = "red"
        error.textContent = "Altura e/ou peso inválidos.";

        return;
    }

    table.appendChild(pacienteTr);


    form.reset();
    
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

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(undefined ,"info-imc"));

    if (!calcIMC(paciente.peso, paciente.altura, pacienteTr) == true){
        return false;
    };

    return pacienteTr;
}

function montaTd(texto, classe){
    const td = document.createElement("td");
    td.textContent = texto;
    td.classList.add(classe);

    return td;
}