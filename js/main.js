//Alteração de título

const obj = document.getElementById("title");
obj.textContent = "Enabler Nutrição";

const pacientes = document.querySelectorAll("#tabela-pacientes tr");

//Cálculo de IMC

for (paciente of pacientes){
    const peso = parseFloat(paciente.querySelector(".info-peso").textContent);
    const altura = parseFloat(paciente.querySelector(".info-altura").textContent);

    let imc = paciente.querySelector(".info-imc");
    
    imc.textContent = Math.floor(peso/(altura*altura));
}
