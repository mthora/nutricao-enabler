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
