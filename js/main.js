//Alteração de título

const obj = document.getElementById("title");
obj.textContent = "Enabler Nutrição";

const pacientes = document.querySelectorAll("#tabela-pacientes tr");

//Cálculo de IMC

for (let paciente of pacientes){

    const peso = paciente.querySelector(".info-peso");
    const altura = paciente.querySelector(".info-altura");
    let imc = paciente.querySelector(".info-imc");

    let pesoValido = true;
    let alturaValida = true;
    
    if (peso.textContent < 0 || peso.textContent >= 600){
        imc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-inválido");
        pesoValido = false;
    } 
    
    if (altura.textContent < 0 || altura.textContent >= 3){
        imc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-inválido");
        alturaValida = false;
    }

    if (pesoValido && alturaValida){
        imc.textContent = (peso.textContent/Math.pow(altura.textContent, 2)).toFixed(2);
    }
}

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